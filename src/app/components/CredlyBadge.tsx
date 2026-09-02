export default function CredlyBadge({
  badgeId,
  width = 150,
  height = 270,
}: {
  badgeId: string;
  width?: number;
  height?: number;
}) {
  return (
    <iframe
      name="acclaim-badge"
      id={`embedded-badge-${badgeId}`}
      src={`https://www.credly.com/embedded_badge/${badgeId}`}
      width={width}
      height={height}
      className="border-0 overflow-hidden"
      scrolling="no"
      title="Verificação de certificação no Credly"
    />
  );
}
