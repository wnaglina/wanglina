// 作业卡片组件，包含悬停动画和响应式布局
export default function HomeworkCard({ title, description }) {
  return (
    <div className="... hover:scale-105"> {/* 悬停放大效果 */}
      <input 
        className="... focus:ring-2 focus:ring-blue-500"  // 聚焦光圈效果
      />
      <button className="... hover:scale-105">  {/* 按钮悬停动画 */}
        提交作业
      </button>
    </div>
  );
}