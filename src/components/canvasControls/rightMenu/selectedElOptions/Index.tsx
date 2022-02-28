import React from 'react'
import { elements } from '../../../../types/canvas.type'

interface Props {
  selectedEl: elements | null
}

const SelectedElOptions: React.FC<Props> = ({ selectedEl }) => {
  const type = selectedEl?.type
  return <div>SelectedElOptions - {selectedEl?.type}</div>
}

export default SelectedElOptions
