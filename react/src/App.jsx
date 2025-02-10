import { useState } from "react";
import "./App.css";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function App() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="search"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Search
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="search"
                                                name="search"
                                                type="text"
                                                placeholder="Search"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Create Criminal Record
                            </h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="year"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Year
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="year"
                                            name="year"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="Month"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Month
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Month"
                                            name="Month"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="Day"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Day
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Day"
                                            name="Day"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="street-address"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="about"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Notifications
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                We'll always let you know about important
                                changes, but you pick what else you want to hear
                                about.
                            </p>

                            <div className="mt-10 space-y-10">
                                <fieldset>
                                    <legend className="text-sm/6 font-semibold text-gray-900">
                                        By email
                                    </legend>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex gap-3">
                                            <div className="flex h-6 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input
                                                        defaultChecked
                                                        id="comments"
                                                        name="comments"
                                                        type="checkbox"
                                                        aria-describedby="comments-description"
                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    />
                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 14 14"
                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                    >
                                                        <path
                                                            d="M3 8L6 11L11 3.5"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-checked:opacity-100"
                                                        />
                                                        <path
                                                            d="M3 7H11"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-indeterminate:opacity-100"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-sm/6">
                                                <label
                                                    htmlFor="comments"
                                                    className="font-medium text-gray-900"
                                                >
                                                    Comments
                                                </label>
                                                <p
                                                    id="comments-description"
                                                    className="text-gray-500"
                                                >
                                                    Get notified when someones
                                                    posts a comment on a
                                                    posting.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-6 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input
                                                        id="candidates"
                                                        name="candidates"
                                                        type="checkbox"
                                                        aria-describedby="candidates-description"
                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    />
                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 14 14"
                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                    >
                                                        <path
                                                            d="M3 8L6 11L11 3.5"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-checked:opacity-100"
                                                        />
                                                        <path
                                                            d="M3 7H11"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-indeterminate:opacity-100"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-sm/6">
                                                <label
                                                    htmlFor="candidates"
                                                    className="font-medium text-gray-900"
                                                >
                                                    Candidates
                                                </label>
                                                <p
                                                    id="candidates-description"
                                                    className="text-gray-500"
                                                >
                                                    Get notified when a
                                                    candidate applies for a job.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-6 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input
                                                        id="offers"
                                                        name="offers"
                                                        type="checkbox"
                                                        aria-describedby="offers-description"
                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    />
                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 14 14"
                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                    >
                                                        <path
                                                            d="M3 8L6 11L11 3.5"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-checked:opacity-100"
                                                        />
                                                        <path
                                                            d="M3 7H11"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-indeterminate:opacity-100"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-sm/6">
                                                <label
                                                    htmlFor="offers"
                                                    className="font-medium text-gray-900"
                                                >
                                                    Offers
                                                </label>
                                                <p
                                                    id="offers-description"
                                                    className="text-gray-500"
                                                >
                                                    Get notified when a
                                                    candidate accepts or rejects
                                                    an offer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend className="text-sm/6 font-semibold text-gray-900">
                                        Push notifications
                                    </legend>
                                    <p className="mt-1 text-sm/6 text-gray-600">
                                        These are delivered via SMS to your
                                        mobile phone.
                                    </p>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                defaultChecked
                                                id="push-everything"
                                                name="push-notifications"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            />
                                            <label
                                                htmlFor="push-everything"
                                                className="block text-sm/6 font-medium text-gray-900"
                                            >
                                                Everything
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-email"
                                                name="push-notifications"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            />
                                            <label
                                                htmlFor="push-email"
                                                className="block text-sm/6 font-medium text-gray-900"
                                            >
                                                Same as email
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-nothing"
                                                name="push-notifications"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            />
                                            <label
                                                htmlFor="push-nothing"
                                                className="block text-sm/6 font-medium text-gray-900"
                                            >
                                                No push notifications
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div> */}
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        {/* <button
                            type="button"
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            Cancel
                        </button> */}
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>

                <div className="bg-white py-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="sm:flex sm:items-center">
                                <div className="flex-auto">
                                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                                        Reports
                                    </h1>
                                    <p className="mt-2 text-sm text-gray-700">
                                        A list of all the Report in your
                                        account.
                                    </p>
                                </div>

                                <div className="mt-4 ml-16 sm:mt-0 flex-none">
                                    <button
                                        type="button"
                                        className="block rounded-md bg-blues-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blues-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blues-600"
                                    >
                                        Request/Add Report
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead>
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        colSpan="4"
                                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Title
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Role
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                                    >
                                                        <span className="sr-only">
                                                            View
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody className="divide-y divide-gray-200 ">
                                                <tr>
                                                    <td
                                                        colSpan="4"
                                                        className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                                                    >
                                                        Jasper
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Front-end Developer
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        lindsay.walton@example.com
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Member
                                                    </td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                        <a
                                                            href="{{ route('report', ['reportId' => $report->report_id]) }}"
                                                            className="text-blues-600 hover:text-blues-900"
                                                        >
                                                            <i className="fa-solid fa-eye mr-1"></i>
                                                            View
                                                            <span className="sr-only">
                                                                , Jasper
                                                            </span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
