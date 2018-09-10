/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-08 22:14:26 
 * @Last Modified by:   Benjamin Lewis 
 * @Last Modified time: 2018-09-08 22:14:26 
 */

import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
