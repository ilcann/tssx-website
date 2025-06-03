import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  comment: string;
  avatar: string;
}

const TestimonialCard = ({ name, title, comment, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
        />
        <div>
          <h4 className="text-md font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <div className="relative text-gray-700">
        <Quote className="absolute top-0 left-0 text-amber-500 opacity-40 w-6 h-6" />
        <p className="pl-8">{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;