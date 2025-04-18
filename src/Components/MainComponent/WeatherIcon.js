export default function WeatherIcon({ iconNumber, alt }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/dist/set01/big/${iconNumber}.png`}
      alt={alt}
      draggable={false}
    />
  );
}
