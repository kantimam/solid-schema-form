import { onCleanup } from "solid-js";

export default (el: HTMLInputElement, accessor)=>{
    const handleInput=(event: InputEvent)=>{
        const value=(event.target as HTMLInputElement).value;
        console.log(`input: ${value}`)
    }
    const handleInvalid=(event)=>{
        console.log("input invalid");
        console.log(event);
    }
    el.addEventListener('input', handleInput);
    el.addEventListener('invalid', handleInvalid);

    onCleanup(()=>{
        el.removeEventListener('input', handleInput);
        el.removeEventListener('invalid', handleInvalid);
    })
}