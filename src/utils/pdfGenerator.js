import { jsPDF } from 'jspdf';

/**
 * Generates and downloads a clean, professional PDF of the BharatDarshan Yatra Itinerary.
 * Works across all modern desktop and mobile browsers.
 */
export function generateItineraryPDF(itinerary, tripData = {}) {
  if (!itinerary) return false;

  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 15;
    const contentWidth = pageWidth - margin * 2; // 180mm
    let currentY = 15;

    const checkAddPage = (neededSpace = 18) => {
      if (currentY + neededSpace > pageHeight - 20) {
        doc.addPage();
        drawHeaderMini();
        currentY = 22;
      }
    };

    const drawHeaderMini = () => {
      doc.setFillColor(15, 23, 42); // slate-900
      doc.rect(0, 0, pageWidth, 10, 'F');
      doc.setFillColor(234, 88, 12); // saffron orange
      doc.rect(0, 10, pageWidth, 1.5, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(255, 255, 255);
      doc.text('BHARATDARSHAN', margin, 7);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(203, 213, 225);
      doc.text('Official AI Travel Itinerary  •  https://bharatdarshan-seven.vercel.app', margin + 35, 7);
    };

    // ── Main Page Header ──────────────────────────────────────────
    // Top saffron accent stripe
    doc.setFillColor(234, 88, 12);
    doc.rect(0, 0, pageWidth, 5, 'F');

    // Navy header block
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 5, pageWidth, 28, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text('BHARATDARSHAN', margin, 18);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(251, 146, 60); // orange-400
    doc.text('DISCOVER & PLAN YOUR DREAM INDIA TRIP', margin, 24);

    doc.setFontSize(8);
    doc.setTextColor(203, 213, 225);
    doc.text('https://bharatdarshan-seven.vercel.app', pageWidth - margin - 60, 24);

    currentY = 40;

    // ── Trip Title & Tagline ───────────────────────────────────────
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    const splitTitle = doc.splitTextToSize(itinerary.tripTitle || `${tripData.destinationName || 'India'} Yatra`, contentWidth);
    doc.text(splitTitle, margin, currentY);
    currentY += splitTitle.length * 7;

    if (itinerary.tagline) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      doc.setTextColor(100, 116, 139);
      const splitTagline = doc.splitTextToSize(itinerary.tagline, contentWidth);
      doc.text(splitTagline, margin, currentY);
      currentY += splitTagline.length * 5 + 3;
    }

    // ── Summary Box ───────────────────────────────────────────────
    checkAddPage(28);
    doc.setFillColor(248, 250, 252); // slate-50
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.roundedRect(margin, currentY, contentWidth, 22, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(234, 88, 12);
    doc.text('DESTINATION', margin + 4, currentY + 7);
    doc.text('DURATION', margin + 55, currentY + 7);
    doc.text('ORIGIN / DEPARTURE', margin + 95, currentY + 7);
    doc.text('BUDGET TIER', margin + 145, currentY + 7);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(tripData.destinationName || 'India', margin + 4, currentY + 14);
    doc.text(`${tripData.days || 1} Days (${tripData.travellers || 1} Traveler)`, margin + 55, currentY + 14);
    doc.text(tripData.origin || departureCityName(tripData) || 'Flexible', margin + 95, currentY + 14);
    doc.text(tripData.budget || 'Standard', margin + 145, currentY + 14);

    currentY += 28;

    // ── Highlights ────────────────────────────────────────────────
    if (itinerary.highlights && itinerary.highlights.length > 0) {
      checkAddPage(20);
      drawSectionHeader(doc, 'Yatra Highlights', margin, currentY);
      currentY += 8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);

      itinerary.highlights.forEach(h => {
        checkAddPage(8);
        const bulletText = doc.splitTextToSize(`•  ${h}`, contentWidth - 4);
        doc.text(bulletText, margin + 2, currentY);
        currentY += bulletText.length * 5;
      });

      currentY += 4;
    }

    // ── Transit & Arrival Logistics ───────────────────────────────
    if (itinerary.logistics) {
      checkAddPage(25);
      drawSectionHeader(doc, 'Arrival & Transit Logistics', margin, currentY);
      currentY += 8;

      doc.setFillColor(241, 245, 249);
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(margin, currentY, contentWidth, 18, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);

      const railText = `Railway: ${itinerary.logistics.nearest_railway_station || 'Nearby station'}`;
      const busText = `Bus Stand: ${itinerary.logistics.nearest_bus_stand || 'Central Stand'}`;
      const airText = `Airport: ${itinerary.logistics.nearest_airport || 'Nearest Domestic/Intl'}`;

      doc.text(doc.splitTextToSize(railText, 55), margin + 4, currentY + 7);
      doc.text(doc.splitTextToSize(busText, 55), margin + 64, currentY + 7);
      doc.text(doc.splitTextToSize(airText, 55), margin + 124, currentY + 7);

      currentY += 24;
    }

    // ── Day-by-Day Schedule ───────────────────────────────────────
    if (itinerary.days && itinerary.days.length > 0) {
      checkAddPage(20);
      drawSectionHeader(doc, 'Day-by-Day Detailed Itinerary', margin, currentY);
      currentY += 9;

      itinerary.days.forEach(day => {
        checkAddPage(26);

        // Day Title Pill
        doc.setFillColor(234, 88, 12); // Orange header for day
        doc.roundedRect(margin, currentY, contentWidth, 7, 1.5, 1.5, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(255, 255, 255);
        doc.text(`DAY ${day.day}: ${day.theme || 'Exploration'}`, margin + 4, currentY + 5);
        currentY += 10;

        const acts = day.activities && day.activities.length > 0
          ? day.activities
          : ['morning', 'afternoon', 'evening'].filter(p => day[p]).map(p => ({
              timeOfDay: p.charAt(0).toUpperCase() + p.slice(1),
              locationName: day[p].locationName || day[p].activity,
              description: day[p].description
            }));

        acts.forEach(act => {
          checkAddPage(14);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(15, 23, 42);
          const timeLabel = act.timeOfDay ? `[${act.timeOfDay}] ` : '';
          const actTitle = `${timeLabel}${act.locationName || act.activity || 'Sightseeing'}`;
          doc.text(actTitle, margin + 4, currentY);
          currentY += 5;

          if (act.description) {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(71, 85, 105);
            const descLines = doc.splitTextToSize(act.description, contentWidth - 8);
            doc.text(descLines, margin + 6, currentY);
            currentY += descLines.length * 4.5 + 2;
          }
        });

        currentY += 4;
      });
    }

    // ── Must Try & Packing Essentials ─────────────────────────────
    if (itinerary.mustTry && itinerary.mustTry.length > 0) {
      checkAddPage(20);
      drawSectionHeader(doc, 'Must Try Local Experiences & Food', margin, currentY);
      currentY += 8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      itinerary.mustTry.forEach(item => {
        checkAddPage(6);
        const itemLines = doc.splitTextToSize(`•  ${item}`, contentWidth - 4);
        doc.text(itemLines, margin + 2, currentY);
        currentY += itemLines.length * 4.5;
      });
      currentY += 4;
    }

    if (itinerary.packingEssentials && itinerary.packingEssentials.length > 0) {
      checkAddPage(20);
      drawSectionHeader(doc, 'Packing Essentials & Travel Tips', margin, currentY);
      currentY += 8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      itinerary.packingEssentials.forEach(item => {
        checkAddPage(6);
        const itemLines = doc.splitTextToSize(`•  ${item}`, contentWidth - 4);
        doc.text(itemLines, margin + 2, currentY);
        currentY += itemLines.length * 4.5;
      });
      currentY += 4;
    }

    // ── Add Footers to all pages ──────────────────────────────────
    const totalPages = doc.internal.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
      doc.setPage(p);

      doc.setDrawColor(226, 232, 240);
      doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184); // slate-400
      doc.text('Plan your custom yatra at https://bharatdarshan-seven.vercel.app', margin, pageHeight - 7);

      doc.text(`Page ${p} of ${totalPages}`, pageWidth - margin - 20, pageHeight - 7);
    }

    // ── Save / Download PDF ───────────────────────────────────────
    const safeDestination = (tripData.destinationName || 'BharatDarshan').replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${safeDestination}_Yatra_Itinerary.pdf`;
    doc.save(filename);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
}

function drawSectionHeader(doc, title, x, y) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(title, x, y);

  doc.setFillColor(234, 88, 12);
  doc.rect(x, y + 1.5, 30, 0.8, 'F');
}

function departureCityName(tripData) {
  if (tripData.departureCity && tripData.departureCity.name) {
    return `${tripData.departureCity.name}, ${tripData.departureCity.state || ''}`;
  }
  return null;
}
