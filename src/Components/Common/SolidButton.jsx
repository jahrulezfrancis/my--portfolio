import { Button } from "@chakra-ui/react";


function SolidButton({ title, onClick, color, width }) {
    return (
        <div className="button-container">
            <Button alignItems='center' color={color} fontSize="17px" onClick={onClick} borderRadius={15} w={`200px${width}`} p="15px 30px" bgColor={"#DD226D"}>{title}</Button>
        </div>
    )
}
export default SolidButton;