import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

const data = {
  todo: [{ id: "1", title: "Add Movies" }],
  progress: [{ id: "2", title: "Configure Seats" }],
  done: [{ id: "3", title: "Release App" }],
};

export default function KanbanPage() {
  const [columns, setColumns] = useState(data);

  function onDragEnd({ source, destination }) {
    if (!destination) return;

    const sourceItems = [...columns[source.droppableId]];
    const destItems = [...columns[destination.droppableId]];

    const [moved] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, moved);

    setColumns({
      ...columns,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(columns).map(([key, items]) => (
          <Droppable droppableId={key} key={key}>
            {(p) => (
              <div ref={p.innerRef} {...p.droppableProps}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                <h2 className="font-semibold mb-4 capitalize">{key}</h2>

                {items.map((task, i) => (
                  <Draggable key={task.id} draggableId={task.id} index={i}>
                    {(p) => (
                      <div ref={p.innerRef} {...p.draggableProps}
                        {...p.dragHandleProps}
                        className="bg-gray-100 dark:bg-gray-700 p-3 rounded mb-3">
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {p.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
