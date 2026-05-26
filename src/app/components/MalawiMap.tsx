export function MalawiMap() {
  return (
    <div className="relative w-full h-full min-h-[500px]">
      <iframe
        title="Lilongwe Pentecostal Church Location"
        src="https://maps.google.com/maps?q=3Q5J%2B43X+Lilongwe+Malawi&output=embed&z=16"
        width="100%"
        height="100%"
        style={{ minHeight: '500px', border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>
  );
}
