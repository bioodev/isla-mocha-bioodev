import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const CustomMenu = () => {
  const [size, setSize] = React.useState("md");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <Button
        onClick={() => handleClick()}
        m={4}
      >{`Menu`}</Button>

      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>{`Menu Isla Mocha`}</DrawerHeader>
          <DrawerBody>
            <ul>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Enlace 1</a></li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomMenu;
