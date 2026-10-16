import { describe, expect, it } from 'vitest'
import { nextHeaderScrollState } from './scrollState'

describe('scroll header', () => {
  it('hides on downward scroll and returns when scrolling up', () => {
    const hidden = nextHeaderScrollState(
      { visible: true, referenceY: 0 },
      400,
      88,
    )
    expect(hidden.visible).toBe(false)
    expect(nextHeaderScrollState(hidden, 370, 88).visible).toBe(true)
  })

  it('ignores small movements but responds to accumulated scrolling', () => {
    const hidden = { visible: false, referenceY: 400 }
    expect(nextHeaderScrollState(hidden, 395, 88)).toBe(hidden)
    expect(nextHeaderScrollState(hidden, 389, 88)).toBe(hidden)
    expect(nextHeaderScrollState(hidden, 388, 88).visible).toBe(true)
  })

  it('shows near the top, including mobile overscroll and a taller header', () => {
    const hidden = { visible: false, referenceY: 400 }
    expect(nextHeaderScrollState(hidden, -20, 88)).toEqual({
      visible: true,
      referenceY: 0,
    })
    expect(nextHeaderScrollState(hidden, 150, 192).visible).toBe(true)
  })
})
