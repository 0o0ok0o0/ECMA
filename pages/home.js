import container from "../components/container";
import Header from "../components/Header";

const HomePage = () => {
  return /*html*/`
      ${container()}
 <div class="w-10/12 m-auto">
      <div class="pt-3 pb-20"> 
      <div class="p-1 bg-gradient-to-r from-[#00cc99] via-[#00cc99] to-[#6600ff] " style="opacity: 1; transform: none;">
        <div class="p-7 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-dark-200">
        <div class="flex border-8 border-gray-200 dark:border-white">

        <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">

        <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">

        <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27350%27/%3e">
        </span>
        <img alt="" src="../Images/Avatar.jpg &amp;w=750&amp;q=75" decoding="async" data-nimg="intrinsic" class="object-cover" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="../Images/Avatar.jpg ">
        </span>
        </div>
        <div class="flex-1 ">
        <div class="pb-4 border-b border-gray-500">
        <h2 class="text-3xl font-bold my-3">Một chút về tôi</h2>
        <p>Hiện tại, mình đang là sinh viên kì 4 tại trường FPT Polytechnic. Mình bắt đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend, ...</p>

        <p class="pt-2">Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend.</p>
        </div>

        <div class="py-3">
        <h1 class="text-xl font-bold capitalize my-4">Thông tin cơ bản</h1>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-2">

        <li><span class="w-[110px] inline-block">Học vấn<!-- -->:</span>
        <span>FPT Polytechnic</span></li>
        <li><span class="w-[110px] inline-block">Điện thoại<!-- -->:</span>
        <span>0987336561</span></li>
        <li><span class="w-[110px] inline-block">Email<!-- -->:</span>
        <span>phuchuy292003@gmail.com</span>
        </li>
        <li><span class="w-[110px] inline-block">Địa chỉ<!-- -->:
        </span>
        <span>Thanh Trì - Hà Nội</span>
        </li>
        <li><span class="w-[110px] inline-block">Website<!-- -->:</span>
        <span>https://phuy.vercel.app</span>
        </li><li><span class="w-[110px] inline-block">Nghề nghiệp<!-- -->:</span>
        <span>Web developer</span>
        </li></ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
    `;
}

export default HomePage;