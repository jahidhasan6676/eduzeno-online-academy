"use client"
// import { useState } from "react"
import desktopIcon from "../../assets/register-desktop.webp"
import mobileIcon from "../../assets/register-mobile.webp"
import facebook from "../../assets/facebbok.png"
import google from "../../assets/google.png"

export default function Register() {

    return (
        <div className="w-11/12 md:w-10/12 mx-auto  py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                {/* Left side - Illustration */}
                <div className="">
                    {/* <IllustrationSVG /> */}
                    <div className="hidden md:flex">
                        <img src={desktopIcon} alt="desktop icon" />
                    </div>

                    <div className="md:hidden flex items-center justify-center">
                        <img src={mobileIcon} alt="mobile icon" />
                    </div>
                </div>

                {/* Right side - Form */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-semibold text-center text-gray-700 mb-8">Sign up with email</h1>

                    <form className="space-y-6">
                        {/* Full Name Input */}
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                                className="w-full px-4 py-4 border border-gray-500 rounded-sm focus:outline-none focus:ring-1 focus:ring-purple-800 focus:border-transparent"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-4 border border-gray-500 rounded-sm focus:outline-none focus:ring-1 focus:ring-purple-800 focus:border-transparent"
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-start gap-3">
                            <div className="flex items-center h-6 mt-0.5">
                                <input
                                    type="checkbox"
                                    name="subscribe"
                                    className="w-5 h-5 rounded accent-purple-600 cursor-pointer"
                                />
                            </div>
                            <label className="text-sm text-gray-700 leading-relaxed">
                                Send me special offers, personalized recommendations, and learning tips.
                            </label>
                        </div>

                        {/* Continue Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-sm transition-colors duration-200 cursor-pointer"
                        >
                            Continue
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">Other sign up options</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="flex gap-4 justify-center">

                        <button className="w-12 h-12 border border-gray-500 rounded-sm flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                            <img src={google} alt="google icon" className="w-8 h-8" />
                        </button>
                        <button className="w-12 h-12 border border-gray-500 rounded-sm flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                            <img src={facebook} alt="facebook icon" className="w-8 h-8" />
                        </button>

                    </div>

                    {/* Footer Links */}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>
                            By signing up, you agree to our{" "}
                            <a href="#" className="text-purple-600 underline">
                                Terms of Use
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-purple-600 underline">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{" "}
                            <a href="#" className="text-purple-600 font-semibold underline">
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
