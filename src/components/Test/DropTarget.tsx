import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

const DropTarget = (props: {
  onDrop: (files: File[]) => void;
  disabled: boolean;
  title: string;
  hoverTitle: string;
}) => {
  const { onDrop, disabled, title, hoverTitle } = props;
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop: (item: { files: File[] }) => {
        onDrop(item.files);
      },
      canDrop: () => !disabled,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [onDrop]
  );
  const isActive = canDrop && isOver;

  return (
    <div ref={drop} data-disabled={disabled}>
      <div data-active={isActive}>
        {isActive ? hoverTitle : title}
      </div>
    </div>
  );
};

export default DropTarget;