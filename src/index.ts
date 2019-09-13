function hello() {
    console.log('hello world')
}

export function goodbye() {
    console.log('good bye ~')
}

export default hello

export { default as add } from 'add'
