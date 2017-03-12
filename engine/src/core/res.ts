namespace engine {
    export namespace RES {
        function loadTexture(path: string) {
            return new Promise(resolve => {
                var result = new engine.Texture();
                result.data = new Image();
                result.data.src = path;
                result.data.onload = () => {
                    result.width = result.data.width;
                    result.height = result.data.height;
                    resolve(result);
                }
            });
        }

        export async function getRes(path: string) {
            return await loadTexture(path);
        }
    }
}