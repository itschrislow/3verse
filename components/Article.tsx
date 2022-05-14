import { ArrowRightIcon } from "@heroicons/react/solid";

const Article = () => {
  return (
    <a
      href="https://docs.google.com/presentation/d/1H2fpib2mYdET4DxmRdf2vz06lkFgJYDir8DbWV5cr3k/edit?usp=sharing"
      target="_blank"
      className="group h-full w-full"
    >
      <div className="flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-lg bg-article bg-cover bg-no-repeat p-4 group-hover:opacity-95">
        <div className="flex h-full w-full grow items-center justify-center">
          <img
            className="h-32 w-auto"
            src="/static/logo_words_white.png"
            alt="3verse"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-center text-lg font-medium text-white">
            See slide deck
          </p>
          <ArrowRightIcon className="h-5 w-auto font-medium text-white" />
        </div>
      </div>
    </a>
  );
};

export default Article;
