import FuzzyText from "../components/FuzzyText";
import { useTheme } from "../components/theme-provider";

function NotFound() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
        <FuzzyText
          baseIntensity={0.1}
          hoverIntensity={0}
          enableHover={true}
          fontSize={120}
          color={theme == "dark" ? "#fff" : "#000"}
        >
          404
        </FuzzyText>
        <div className="p-2" />

        <FuzzyText
          baseIntensity={0.1}
          hoverIntensity={0}
          enableHover={true}
          fontSize={50}
          color={theme == "dark" ? "#fff" : "#000"}
        >
          not found
        </FuzzyText>
      </div>
    </>
  );
}

export default NotFound;
