import Docker from 'dockerode';

async function createContainer(imageName: string, cmdExecutable: string[]) {
    const docker = new Docker();

    const container = await docker.createContainer({
        Image: imageName,
        Cmd: cmdExecutable,
        AttachStdin: true, // to enable input streams
        AttachStdout: true, // to enable output streams
        AttachStderr: true, // to enable error streams
        Tty: false,
        HostConfig: {
            Memory: 1024 * 1024 * 1024, // 2GB :- for dockerode :- enough memory :- heap space :- we can give the memory limit to keep away from fork bomb.
            // class Solution {

            //     // Note that the size of the array is n-1
            //     int cube(int n) {
                
            //     int[] arr = new int[1000000000];
            //     for(int i=0;i < 10; i++){
            //         System.out.print(i);
            //     }
            //         return n*n*n;
                    
            //     }
            // } 'java'
        },
        OpenStdin: true // keep the input stream open even no interaction is there
    });

    return container;
}

export default createContainer;