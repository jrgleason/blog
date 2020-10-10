import Koa from "koa";
const port = process.env.PORT || 3000
export class Application{
    async boot(){
        console.info("Booting...");
        this.app = new Koa();
        this.app.use((ctx)=>{
            ctx.body = "Hello World"
        });
        this.app.listen(port, () => console.log(`Started on port ${port}`));
    }
}

const app = new Application();
const boot = app.boot()
boot.then(()=>{
    console.log("Application started");
}).catch((err)=>{
    console.error(`There was a fatal error ${err}`);
    process.exit(1);
})