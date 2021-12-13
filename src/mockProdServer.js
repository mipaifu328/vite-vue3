/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-02 11:30:41
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-03 11:12:30
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import testMock from '@/mock'

export const mockModules = [...testMock]

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
