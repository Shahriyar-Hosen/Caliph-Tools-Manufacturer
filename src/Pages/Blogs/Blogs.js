import React from "react";

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl font-bold font-serif text-primary pt-7 pb-5 text-center">
        My Blogs
      </h1>
      <div className="gap-7 my-10 mx-5">
        <div class="card w-full bg-sky-50 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              আপনি কিভাবে একটি রিয়েক্ট অ্যাপ্লিকেশনের পারফরম্যান্স ইম্প্রুভ
              করবেন?
            </h2>
            <h2 class="card-title border-b-8 pb-2 border-double border-secondary">
              How will you improve the performance of a React Application?
            </h2>
            <p>
              React.js দিয়ে বড় প্রজেক্ট করার সময় সিঙ্গেল পেজ অ্যাপ্লিকেশন
              হওয়ার কারণে React.js এর পারফর্মেন্স কিছুটা কমে যায়। React.js এর
              এই পারফরম্যান্স ইমপ্রুভ করার জন্য পরীক্ষিত পাঁচটি মাধ্যম আলোচনা
              করা হলোঃ-
            </p>
            <ul>
              <li className="font-bold">⭐Large bundle size</li>
              <li className="font-bold">⭐Large rendering</li>
              <li className="font-bold">⭐Scaffolding </li>
              <li className="font-bold">⭐Unnecessary rendering</li>
              <li className="font-bold">⭐Download on demand</li>
            </ul>
            <br />
            <h2 className="font-bold">⭐Large bundle size</h2>
            <p>
              React সিঙ্গেল পেজ অ্যাপ্লিকেশন হওয়ার কারণে আমরা যখন বিল্ড করি তখন
              বিল্ড ফাইল এর ভেতরে জাভাস্ক্রিপ্টের বান্ডেল ফাইল তৈরি হয়।
              প্রজেক্ট বড় হলে বান্ডেল সাইজটা অনেক বড় হয়ে যায় সে ক্ষেত্রে
              প্রজেক্ট এর ইনিশিয়াল লোডিং টাইম বেশি হয়ে যায় এবং অন্যান্য
              প্রসেসিংয়ে সময় বেশি লেগে যায়। সে ক্ষেত্রে বান্ডেল ফাইলটিকে
              একত্রে না রেখে টুকরো টুকরো করে রাখলে বা স্প্রিডিং করে আলাদা রাখলে
              এর ইনিশিয়াল লোডিং টাইম অনেকটা কমে যায়। এই কাজটি করার জন্য
              react.js এর lazy এবং suspend ব্যবহার করে স্প্রিডিং করতে পারি।
            </p>{" "}
            <h2 className="font-bold">⭐Large rendering</h2>
            <p>
              লার্জ রেন্ডারিং সাধারণত প্রজেক্টে অনেক বেশি ডাটা থাকলে সবগুলো ডাটা
              একবারে লোড করলে ওয়েব পেজ ক্রাশ করতে পারে বা webpage not
              responding দেখাবে বা রেসপন্স টাইম বেশি হওয়ার কারণে ব্রাউজার ওয়েব
              পেজকে কিল করতে পারে। এই সমস্যা থেকে বাঁচতে যতোটুকু ডাটা প্রয়োজন
              ততটুকুই ডাটা লোড করতে হবে। অর্থাৎ window তে যতোটুকু ডাটা দেখাবে
              ততটুকু ডাটা লোড করবে। এই কাজটি করার জন্য React window টুল টি
              ব্যবহার করতে হবে।
            </p>{" "}
            <h2 className="font-bold">⭐Scaffolding</h2>
            <p>
              React.js যেহেতু ফ্রন্ট এন্ড টেকনোলজি সে ক্ষেত্রে react.js দিয়ে
              ব্যাকএন্ড এর হয়না। আর এজন্যই react.js দিয়ে যখন অন্য কোন
              লাইব্রেরি বা ফ্রেমওয়ার্ক বা ব্যাকএন্ড এর সাথে Scaffold করা হয়
              অর্থাৎ একই প্রজেক্ট এর ভিতর Scaffold করে কাজ করা হয় তখন রিয়েক্ট
              এর পারফরম্যান্স অনেকটা কমে যায়।{" "}
            </p>{" "}
            <h2 className="font-bold">⭐Unnecessary rendering</h2>
            <p>
              React.js এর কম্পোনেন্ট এর ভেতরে স্টেট ইউজ করার ফলে স্টেট এর মান
              যতবার চেঞ্জ হয় ততবার কম্পনেন্টটি রি-রেন্ডার হয়। এই আননেসেসারি
              রি-রেন্ডার কমিয়ে ফেলতে হবে। এজন্য আমরা রেফারেন্স, DOM, react hook
              ব্যবহার করতে পারি।{" "}
            </p>{" "}
            <h2 className="font-bold">⭐Download on demand</h2>
            <p>
              {" "}
              react.js এর প্রজেক্টে ছবি, ভিডিও বা অডিও সাধারণত পুরো পেজের একবারে
              ডাউনলোড হয়ে দেখায়। এজন্য পারফরম্যান্স কমে যায়। যতটুক প্রয়োজন বা
              উইন্ডোজ যতটুকু দেখা যাচ্ছে শুধু লোড করা। এক্ষেত্রে download on
              demand স্টেটজি ব্যবহার করার জন্য react.js এর lazy load ব্যবহার
              করতে পারি।{" "}
            </p>
          </div>
        </div>

        <div class="card w-full bg-sky-50 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
