import ReactMarkdown from "react-markdown";

const Markdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a
            className="text-green-500 hover:underline"
            target="_blank"
            {...props}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
