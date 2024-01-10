import { Container } from "./styles";

export function Button({ icon:Icon, title, isactive = false, loading = false, ...rest}) {
    return(
        <Container 
        type="button"
        {...rest}
        $isactive={isactive.toString()} 
        >
            {Icon && <Icon/>}
            {loading ? "Carregando..." : title}
        </Container>
    )
}