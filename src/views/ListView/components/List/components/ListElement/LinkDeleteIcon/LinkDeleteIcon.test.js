import React from 'react';
import { render } from '@testing-library/react';
import LinkDeleteIcon from '../LinkDeleteIcon';

describe("LinkDeleteIcon test", () => {
    test("Test LinkDeleteIcon component gets rendered", async () => {
      const rendered = render(<LinkDeleteIcon />)
      rendered.getByTitle("Delete")
    })
  })
