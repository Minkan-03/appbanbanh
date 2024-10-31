import { Button, Center, HStack, Image, Modal, Pressable, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import Buttone from './Buttone'
import Colors from '../color'
import { useNavigation } from '@react-navigation/native'

const OrdersInfo = [
    {
        title: "Products",
        price: 120.001,
        color: "black"
    },
    {
        title: "Shipping",
        price: 4.001,
        color: "black"
    },
    {
        title: "Tax",
        price: 20.001,
        color: "black"
    },
    {
        title: "Total Amount",
        price: 144.003,
        color: "main"
    },
]

const OrderModel = () => {
    const navigation = useNavigation()
    const [showModel, setShowModel] = useState(false);
    return (
        <Center>
            <Buttone
                onPress={() => setShowModel(true)}
                bg={Colors.main}
                color={Colors.white}
                mt={5}
            >
                SHOW PAYMENT & TOTAL
            </Buttone>
            <Modal
                isOpen={showModel}
                onClose={() => setShowModel(false)}
                size="lg"
            >
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrdersInfo.map((i, index) => (
                                <HStack
                                    key={index}
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text fontWeight="medium">{i.title}</Text>
                                    <Text
                                        color={i.color === "main" ? Colors.main : Colors.black}
                                        bold
                                    >
                                        {i.price}đ
                                    </Text>
                                </HStack>
                            ))}

                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable
                            w="full"
                            justifyContent="center"
                            bg={Colors.paypal}
                            h={45}
                            rounded={3}
                            overflow="hidden"
                            onPress={() => setShowModel(false)}
                        >
                            <Image
                                source={require("../../assets/images/paypal.png")}
                                alt="paypal"
                                resizeMode="contain"
                                w="full"
                                h={34}
                            />
                        </Pressable>
                        <Button
                            w="full"
                            mt={2}
                            bg={Colors.black}
                            h={45}
                            _text={{
                                color: Colors.white,
                            }}
                            onPress={() => {
                                navigation.navigate("Home");
                                setShowModel(false)
                            }
                            }
                            _pressed={{
                                bg: Colors.black,
                            }}
                        >
                            PAY LATER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default OrderModel