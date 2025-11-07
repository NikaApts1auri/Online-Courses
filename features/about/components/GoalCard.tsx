interface GoalCardProps {
  title: string;
  text: string;
}

export default function GoalCard({ title, text }: GoalCardProps) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">
      <div className="mb-3 text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 8v4m0 4h.01"
          />
        </svg>
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
