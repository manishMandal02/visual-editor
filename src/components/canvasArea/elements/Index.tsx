import React from 'react'
import { CIRCLE, RECTANGLE, TYPE_SHAPE, TYPE_TEXT } from '../../../constants'
import { useAppStore } from '../../../store'
import CircleShape from './shapes/Circle'
import RectangleShape from './shapes/Rectangle'
import TextElement from './text/Index'

const shapesComponent = [
  {
    shape: CIRCLE,
    cmp: CircleShape,
  },
]

const Elements = () => {
  // global state
  const elements = useAppStore((state) => state.elements)
  const selectedEl = useAppStore((state) => state.selectedEl)
  const hoveredEl = useAppStore((state) => state.hoveredEl)
  const setSelectedEl = useAppStore((state) => state.setSelectedEl)
  const setHoveredEl = useAppStore((state) => state.setHoveredEl)
  const setHoveredElNull = useAppStore((state) => state.setHoveredElNull)
  const onDragEl = useAppStore((state) => state.onDragEl)
  const onTransformEl = useAppStore((state) => state.onTransformEl)

  return (
    <>
      {elements.map((el) => {
        if (el.type === TYPE_SHAPE) {
          return el.subType === CIRCLE ? (
            <CircleShape
              key={el.id}
              isSelected={selectedEl?.id == el.id}
              isHovered={hoveredEl?.id === el.id}
              onHover={setHoveredEl}
              onHoverEnd={setHoveredElNull}
              onClick={setSelectedEl}
              onDrag={onDragEl}
              onTransform={onTransformEl}
              shapeProps={el}
            />
          ) : el.subType === RECTANGLE ? (
            <RectangleShape
              key={el.id}
              isSelected={selectedEl?.id == el.id}
              isHovered={hoveredEl?.id === el.id}
              onHover={setHoveredEl}
              onHoverEnd={setHoveredElNull}
              onClick={setSelectedEl}
              onDrag={onDragEl}
              onTransform={onTransformEl}
              shapeProps={el}
            />
          ) : null
        } else if (el.type === TYPE_TEXT) {
          return (
            <TextElement
              key={el.id}
              isSelected={selectedEl?.id == el.id}
              isHovered={hoveredEl?.id === el.id}
              onHover={setHoveredEl}
              onHoverEnd={setHoveredElNull}
              onClick={setSelectedEl}
              onDrag={onDragEl}
              onTransform={onTransformEl}
              shapeProps={el}
            />
          )
        }
      })}
    </>
  )
}

export default Elements
