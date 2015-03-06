export default function() {
  //this.transition(
  //  this.fromRoute('messages'),
  //  this.toRoute('message'),
  //  this.use('toLeft')
  //);
  this.transition(
    this.fromRoute('application'),
    this.toRoute('messages'),
    this.use('toLeft')
  );
}
