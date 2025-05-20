import ExerciseCard from './组件/ExerciseCard';
import Navbar from './组件/Nav';
import exercises from "../data/exercises.json";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            《Web前端开发》课程作业展示
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            欢迎来到课程作业展示平台。这里汇集了各个阶段的学习成果与练习项目。
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold text-slate-800 mb-10 text-center">
            课程练习列表
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-300 text-center p-8 mt-auto">
        <p>&copy; {new Date().getFullYear()} Web前端开发课程. 版权所有.</p>
        <p className="text-sm mt-1">专业设计，用心呈现</p>
      </footer>
    </div>
  );
}