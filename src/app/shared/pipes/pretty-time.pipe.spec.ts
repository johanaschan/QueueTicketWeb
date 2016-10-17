import { PrettyTimePipe } from './pretty-time.pipe';

describe('Pipe: PrettyNumber', () => {

  it('create an instance', () => {
    let pipe = new PrettyTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms time', () => {
    let pipe = new PrettyTimePipe();
    expect(pipe.transform(172320269368)).toEqual('2 minutes 52 seconds');
  });

});
