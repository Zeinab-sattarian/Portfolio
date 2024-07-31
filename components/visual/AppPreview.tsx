
/**
 *
 * 
 *
 * @param {String} image - Image shown in the preview.
 *
 */

export default function ImagePreview() {
  return (
    <>
      <div className={`container`}>
        <img src="/Picture5.png" alt="" />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          .container img {
            width: 65%;
          }

          @media screen AND (max-width: 526px) {
            .container img {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}
