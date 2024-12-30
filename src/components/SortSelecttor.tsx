import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelecttor = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>Relevence</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release</MenuItem>
        <MenuItem>Average rating</MenuItem>
        <MenuItem>Popularity</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelecttor;
