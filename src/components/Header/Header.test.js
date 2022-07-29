import { test } from 'jest-circus';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header'

describe('Header', () => {
  it('Should be defined', () => {
    const component = renderer.create(<Header/>);
    expect(component).toBeDefined();  
  })
})