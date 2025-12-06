// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { server } from '@/mocks/server'

// 全てのテスト前に必ず実行される（テストの初期設定）
beforeAll(() => server.listen()) // mock serverを起動
afterEach(() => server.resetHandlers()) // テスト終了後に毎回、mock serverをリセット
afterAll(() => server.close()) // テスト終了後にmock serverを停止
