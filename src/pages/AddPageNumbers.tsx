import AnimatedContent from "@/components/AnimatedContent";

const AddPageNumbers = () => {
  return (
    <AnimatedContent>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Add Page Numbers Coming Soon
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Stay tuned for this feature.
          </p>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default AddPageNumbers;
