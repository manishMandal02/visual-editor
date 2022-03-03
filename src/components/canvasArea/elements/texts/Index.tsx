import React from 'react'
import { useTextStore } from '../../../../store/text'
import { element, text } from '../../../../types/canvas.type'
import { useProjectBoardStore } from '../../../../store/projectBoard'
import TextElement from './Text'

interface Props {}

const Texts = () => {
  // global state - project board store
  const selectedEl = useProjectBoardStore((state) => state.selectedEl)
  const hoveredEl = useProjectBoardStore((state) => state.hoveredEl)
  const setSelectedEl = useProjectBoardStore((state) => state.setSelectedEl)
  const setHoveredEl = useProjectBoardStore((state) => state.setHoveredEl)
  const setHoveredElNull = useProjectBoardStore(
    (state) => state.setHoveredElNull
  )
  // global state - shape store
  const texts = useTextStore((state) => state.texts)
  const onDragText = useTextStore((state) => state.onDrag)
  const onTransformText = useTextStore((state) => state.onTransform)

  const onHoverHandler = (el: element) => {
    setHoveredEl(el)
  }
  const onClickHandler = (el: element) => {
    setSelectedEl(el)
  }
  const onDragHandler = (value: { id: string; x: number; y: number }) => {
    onDragText(value)
  }
  const onTransformHandler = (text: text) => {
    onTransformText(text)
  }
  console.log(texts)

  return (
    <>
      {texts.map((t) => (
        <TextElement
          key={t.id}
          isSelected={selectedEl?.id == t.id}
          isHovered={hoveredEl?.id === t.id}
          onHover={onHoverHandler}
          onHoverEnd={setHoveredElNull}
          onClick={onClickHandler}
          onDrag={onDragHandler}
          onTransform={onTransformHandler}
          shapeProps={t}
        />
      ))}
    </>
  )
}

export default Texts
