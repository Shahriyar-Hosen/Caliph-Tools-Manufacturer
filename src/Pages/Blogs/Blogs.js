import React from "react";

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl font-bold font-serif text-primary py-8 text-center">
        My Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
        <div className="card w-full bg-sky-50 shadow-xl mb-10">
          <div className="card-body">
            <h2 className="card-title">
              আপনি কিভাবে একটি রিয়েক্ট অ্যাপ্লিকেশনের পারফরম্যান্স ইম্প্রুভ
              করবেন?
            </h2>
            <h2 className="card-title border-b-8 pb-2 border-double border-secondary">
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

        <div className="card w-full bg-sky-50 shadow-xl mb-10">
          <div className="card-body">
            <h2 className="card-title">
              একটি রিয়েক্ট অ্যাপ্লিকেশনে একটি স্টেট পরিচালনা করার বিভিন্ন উপায়
              কি কি?
            </h2>
            <h2 className="card-title border-b-8 pb-2 border-double border-secondary">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              রিয়েক্ট অ্যাপ ম্যানেজ করার জন্য সাধারণত চার ধরনের স্টেট ব্যবহার
              করা হয়:-
            </p>
            <ul>
              <li className="font-bold">⭐Local state</li>
              <li className="font-bold">⭐Global state</li>
              <li className="font-bold">⭐Server state </li>
              <li className="font-bold">⭐URL state</li>
            </ul>
            <br />
            <h2 className="font-bold">⭐Local state</h2>
            <p>
              {" "}
              যেখানে আমরা সাময়িকভাবে ডাটা সংরক্ষণ করি। এক্ষেত্রে বেশিরভাগ সময়
              useState হুক ব্যবহার করা হয়।{" "}
            </p>
            <h2 className="font-bold">⭐Global state</h2>
            <p>
              {" "}
              গ্লোবাল স্টেট হল আমরা ডেটা একাধিক কম্পনেন্টে থেকে ডাটা পেতে এবং
              পরিচালনা করতে পারি। <br />
              আমরা যখন আমাদের অ্যাপের যেকোনো জায়গায় বা একাধিক উপাদানে ডেটা
              পেতে এবং আপডেট করতে চাই তখন গ্লোবাল স্টেট প্রয়োজনীয়।
            </p>
            <h2 className="font-bold">⭐Server state</h2>
            <p>
              {" "}
              আউটসাইড থেকে কোন ডাটা লোড করতে ব্যবহার করা হয়। এক্ষেত্রে
              useEffect ব্যবহার করা হয়।{" "}
            </p>
            <h2 className="font-bold">⭐URL state</h2>
            <p>
              {" "}
              পাথনাম এবং কোয়েরি প্যারামিটার সহ ইউআরএল-এ থাকা ডেটা পেতে ব্যবহার
              করা হয়। এক্ষেত্রে useParams ব্যবহার করা হয়|{" "}
            </p>
          </div>
        </div>

        <div className="card w-full bg-sky-50 shadow-xl mb-10">
          <div className="card-body">
            <h2 className="card-title">
              প্রোটোটাইপিকাল ইনহেরিট কিভাবে কাজ করে?
            </h2>
            <h2 className="card-title border-b-8 pb-2 border-double border-secondary">
              How does prototypical inheritance work?
            </h2>
            <p>
              প্রোটোটাইপ্যাল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা
              অবজেক্ট মেথড এড এবং বৈশিষ্ট্য যোগ করতে ব্যবহার করা হয়। এটি এমন
              একটি মেথড যার মাধ্যমে একটি অবজেক্ট অন্য মেথড এর বৈশিষ্ট্য এবং মেথড
              এর উত্তরাধিকারী হতে পারে। সাধারণত, একটি ম্যাথ মেথডের এর
              [[প্রোটোটাইপ]] পেতে এবং সেট করার জন্য, আমরা অবজেক্ট ব্যবহার করি।
            </p>
          </div>
        </div>

        <div className="card w-full bg-sky-50 shadow-xl mb-10">
          <div className="card-body">
            <h2 className="card-title">
              React এ আপনি কেন সরাসরি স্টেট সেট করবেন না!
            </h2>
            <h2 className="card-title border-b-8 pb-2 border-double border-secondary">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h2>
            <p>
              নিম্নলিখিত কারণগুলির কারণে কখনই সরাসরি স্টেট আপডেট করা উচিত নয়:
            </p>
            <ul>
              <li className="mt-2">
                আপনি যদি এটি সরাসরি আপডেট করেন, তাহলে setState() কে পরে কল করলে
                আপনার করা আপডেটটি বদলে যেতে পারে।
              </li>
              <li className="my-2">
                আপনি যখন সরাসরি স্টেট আপডেট করেন, তখন এটি এই স্টেটকে তখনই
                পরিবর্তন করে না। পরিবর্তে, এটি একটি অপেক্ষা করা অবস্থার রেন্ডার
                করে, এবং এই পদ্ধতিতে কল করার পরে এটি অ্যাক্সেস করা শুধুমাত্র
                বর্তমান মান পাওয়া যায়।
              </li>
              <li>সকল কোম্পানির থেকে এটি ব্যবহার করা যাবে না। </li>
            </ul>
          </div>
        </div>

        <div className="card w-full bg-sky-50 shadow-xl mb-10">
          <div className="card-body">
            <h2 className="card-title">
              পণ্য একটি অ্যারে থেকে. প্রতিটি পণ্যের একটি নাম, মূল্য, বিবরণ,
              ইত্যাদি রয়েছে। নাম অনুসারে পণ্যগুলি খুঁজতে আপনি কীভাবে একটি
              অনুসন্ধান বাস্তবায়ন করবেন?
            </h2>
            <h2 className="card-title border-b-8 pb-2 border-double border-secondary">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>

            <img src="https://i.ibb.co/hckf0cH/Screenshot-2.png" alt="" />
          </div>
        </div>

        <div className="card w-full bg-sky-50 shadow-xl mb-10">
          <div className="card-body">
            <h2 className="card-title">
              একটি ইউনিট পরীক্ষা কি? কেন ইউনিট পরীক্ষা লিখতে হবে?
            </h2>
            <h2 className="card-title border-b-8 pb-2 border-double border-secondary">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              ইউনিট পরীক্ষা এবং ইন্টিগ্রেশন পরীক্ষা আপনাকে আত্মবিশ্বাস দেয় যে
              আপনার অ্যাপ ভালোভাবে কাজ করে। কার্যকরী পরীক্ষাগুলি ব্যবহারকারীর
              দৃষ্টিকোণ থেকে অ্যাপটিকে দেখে এবং পরীক্ষা করে যে সিস্টেমটি
              প্রত্যাশিত অনুযায়ী কাজ করছে কি না।
            </p>
            <p>
              জাভাস্ক্রিপ্ট ইউনিট টেস্টিং হল একটি পদ্ধতি যেখানে জাভাস্ক্রিপ্ট
              কোড পরীক্ষার একটি ওয়েব পেজ বা ওয়েব অ্যাপ্লিকেশন মডিউলের জন্য
              লেখা হয়। তারপরে এটি একটি ইনলাইন ইভেন্ট হ্যান্ডলার হিসাবে HTML এর
              সাথে একত্রিত হয় এবং সমস্ত কার্যকারিতাগুলি পছন্দসই কাজ করছে কিনা
              তা পরীক্ষা করার জন্য ব্রাউজারে কার্যকর করা হয়। এই ইউনিট
              পরীক্ষাগুলি তারপর টেস্ট স্যুটে সংগঠিত হয়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
