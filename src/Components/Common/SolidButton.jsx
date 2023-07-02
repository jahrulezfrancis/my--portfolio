import { Button } from "@chakra-ui/react";


function SolidButton({title, onClick}){
return(
    <div className="button-container">
        <Button fontSize="17px" onClick={onClick} borderRadius={15} w="200px" p="15px 30px" bgColor={"#FF9142"}>{title}</Button>
    </div>
)
}
export default SolidButton;