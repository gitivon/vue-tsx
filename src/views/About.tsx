import { Component, Prop, Vue } from 'vue-property-decorator';
import Demo from '@/components//Demo'

@Component
export default class About extends Vue {

  @Prop() private msg!: string;

  public handlerClick (self) {
    console.log(self)
  }

  public render (h) {
    const data = {
      props: {
        ok: this.msg,
        error: 'error happens'
      },
      on: {
        click: this.handlerClick
      }
    }
    return (
      <div> 
        {this.msg}
        <Demo 
          // {...data}
          // ok={this.msg} 
          // cancel={this.msg} 
          // on={{'click': this.handlerClick}}
          // onClick={this.handlerClick} 
        />
      </div>
    )
  }

}