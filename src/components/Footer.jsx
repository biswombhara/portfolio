
export default function Footer() {
  return (
    <>
    <div className='flex bg-[#080c14] justify-content-lg-between p-4 border-bottom'>
      <div className="flex justify-between w-[100%] mx-[7%]">
        <p>
          Get connected with me on social networks:
        </p>
        <div className="text-[1.2rem]">
          <a className="mr-4" href="https://www.linkedin.com/in/biswombhara-patra"><i class="fa-brands fa-linkedin"></i></a>
          <a className="mr-4" href="https://github.com/biswombhara"><i class="fa-brands fa-github"></i></a>
          <a className="mr-4" href="https://x.com/biswombhara"><i class="fa-brands fa-x-twitter"></i></a>
          <a className="mr-4" href="https://www.instagram.com/master_bisup"><i class="fa-brands fa-instagram"></i></a>
          <a className="mr-4" href="https://www.facebook.com/biswambhara.patra"><i class="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    </div>
    <hr className="mx-[7%] opacity-30" />
    <p className='bg-[#080c14] text-center p-4'>Made with ❤️ by Biswombhara Patra</p>
    </>
  );
}