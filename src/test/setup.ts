import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// 在每个测试后清理
afterEach(() => {
  cleanup()
})
