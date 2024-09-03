export default function QuestionOrderComponent({ order }: { order: number }) {
  return (
    <div>
      <h3 className="text-[#0092FC] text-3xl">/0{order}</h3>
    </div>
  );
}
