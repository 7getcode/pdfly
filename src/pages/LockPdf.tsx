import AnimatedContent from "@/components/AnimatedContent";

const LockPdf = () => {
  return (
    <AnimatedContent>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Lock PDF Coming Soon!
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Stay tuned for this feature.
          </p>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default LockPdf;
