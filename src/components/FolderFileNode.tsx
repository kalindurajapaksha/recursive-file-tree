import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { Node } from "../App";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const FolderFileNode = ({ node }: { node: Node }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {node.folders ? (
        <>
          <span className="flex gap-1 items-center">
            <button onClick={() => setIsOpened((prev) => !prev)}>
              <ChevronRightIcon
                className={`size-4 ${isOpened && "rotate-90"}`}
              />
            </button>
            <FolderIcon className="size-6 text-blue-400" />
            {node.name}
          </span>
          {isOpened && (
            <div className="ml-3">
              {node.folders.map((node) => (
                <FolderFileNode key={node.name} node={node} />
              ))}
            </div>
          )}
        </>
      ) : (
        <span className="flex gap-1">
          <DocumentIcon className="size-6 text-gray-500" />
          {node.name}
        </span>
      )}
    </>
  );
};

export default FolderFileNode;
