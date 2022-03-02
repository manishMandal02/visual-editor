import React, { useEffect, useState } from 'react'
//
import CircleShape from './Circle'
import RectangleShape from './Rectangle'
import { CIRCLE, RECTANGLE, TYPE_SHAPE } from '../../../../constants'
import { useShapeStore } from '../../../../store/shapes'
import { element, shape } from '../../../../types/canvas.type'
import { useProjectBoardStore } from '../../../../store/projectBoard'
import { stringify } from 'querystring'

interface Props {}

const Shapes = () => {
  // global state - project board store
  const selectedEl = useProjectBoardStore((state) => state.selectedEl)
  const hoveredEl = useProjectBoardStore((state) => state.hoveredEl)
  const setSelectedEl = useProjectBoardStore((state) => state.setSelectedEl)
  const setHoveredEl = useProjectBoardStore((state) => state.setHoveredEl)
  const setHoveredElNull = useProjectBoardStore(
    (state) => state.setHoveredElNull
  )
  // global state - shape store
  const shapes = useShapeStore((state) => state.shapes)
  const onDragShape = useShapeStore((state) => state.onDrag)
  const onTransformShape = useShapeStore((state) => state.onTransform)

  const onHoverHandler = (el: element) => {
    setHoveredEl(el)
  }
  const onClickHandler = (el: element) => {
    setSelectedEl(el)
  }
  const onDragHandler = (value: { id: string; x: number; y: number }) => {
    onDragShape(value)
  }
  const onTransformHandler = (shape: shape) => {
    onTransformShape(shape)
  }

  return (
    <>
      {shapes.map((c) => {
        if (c.subType === CIRCLE) {
          return (
            <CircleShape
              key={c.id}
              isSelected={selectedEl?.id == c.id}
              isHovered={hoveredEl?.id === c.id}
              onHover={onHoverHandler}
              onHoverEnd={setHoveredElNull}
              onClick={onClickHandler}
              onDrag={onDragHandler}
              onTransform={onTransformHandler}
              shapeProps={{
                id: c.id,
                type: c.type,
                subType: c.subType,
                x: c.x,
                y: c.y,
                radius: c.radius,
              }}
            />
          )
        }
      })}
      {shapes.map((r) => {
        if (r.subType === RECTANGLE) {
          return (
            <RectangleShape
              key={r.id}
              isSelected={selectedEl?.id == r.id}
              isHovered={hoveredEl?.id === r.id}
              onHover={onHoverHandler}
              onHoverEnd={setHoveredElNull}
              onClick={onClickHandler}
              onDrag={onDragHandler}
              onTransform={onTransformHandler}
              shapeProps={{
                id: r.id,
                x: r.x,
                type: r.type,
                subType: r.subType,
                y: r.y,
                height: r.height,
                width: r.width,
              }}
            />
          )
        }
      })}
    </>
  )
}

export default Shapes
