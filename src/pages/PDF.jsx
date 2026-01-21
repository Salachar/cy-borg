import cyborgPDF from "../assets/cyborg_no_covers_spreads.pdf"

export default function PDF() {
  return (
    <div className="w-full h-full">
      <iframe
        src={cyborgPDF}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="PDF Viewer"
      />
    </div>
  );
}
