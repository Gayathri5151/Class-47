class Form
{
    constructor()
    {
        this.AC1 = createInput("Code1")
        this.AC1.position(350,200)
     //   this.AC1.style('background','white')
        this.button1 = createButton("Check")
        this.button1.position(370,400)
        this.button1.style('background','grey')
    }


display()
{
    this.button1.mousePressed(()=>
    {
        if(Security.authenticate(A1,this.AC1))
        {
          this.button1.hide()
          this.AC1.hide()
        }
    })
}
}