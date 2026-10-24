import { PCComponent, ComponentType } from '../types';

// Raw data provided by the user
const RAW_JSON =[
    {
        "_id": "cpu_amd_ryzen_5_5600",
        "category": "cpu",
        "name": "AMD Ryzen 5 5600",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 12000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgir3-M2WfiEAR12JS9034-bzC-5x8POOq5pvDKmyT3ngCdDR3uoTxEwlJ-al8FIkXLeARM7W5Q0yDeypHuzkCiZqtLpozqYeTjgSr7pJyO46ODhtx8BBoYg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "A520",
                "B450",
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_5600x",
        "category": "cpu",
        "name": "AMD Ryzen 5 5600X",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 4.6,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 16000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGlQD9v6_auHO7smmmp6bYapgwpC9koSEHsdWLnW8puSZmkdb6-s13jO5-vLJXxgiC-sIn6FjdMOow4qu30JybkTp_umMXcGC77Mg3X17CGKE2OSELeEosQh8",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_5700x",
        "category": "cpu",
        "name": "AMD Ryzen 7 5700X",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.4,
            "boost_clock_GHz": 4.6,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 18000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiTumi3PuCZ02zJP2YY1E7afonREwyA9TL6bfEYdzM2_ujOYiRMgK_lsjRYn9CL1f0vYfkZzS5EjOgtE_i9a0BFF4-69OywhsDCH9vicDHqiaxvz11Lfmx",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3600
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_5800x",
        "category": "cpu",
        "name": "AMD Ryzen 7 5800X",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.8,
            "boost_clock_GHz": 4.7,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 22000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTdg-JxBS-PaSRF5QnJQu71GCelNeIGY7LqTWWT9tEn1fcmxi2nWLXRqwnuI4OhzEcARhkrQjpurGbgArHiButHrOI4RBa5APo0-lmo9Ik",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3600
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_5900x",
        "category": "cpu",
        "name": "AMD Ryzen 9 5900X",
        "brand": "AMD",
        "specs": {
            "cores": 12,
            "threads": 24,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 4.8,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 32000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS274FzBEzmdZbC_FIDOMkOhB26AjUCH_1ZKzaLRbDIlXMnKpuYXix-vv5Qh8Wz7y9x91O8MQyFgzYCRXnIb9AqqbOSd2g99jF7MDq3Syxg9ce5qKDrxR79gQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "X570"
            ],
            "max_ram_speed_mhz": 3600
        }
    },
    {
        "_id": "cpu_intel_i3_12100f",
        "category": "cpu",
        "name": "Intel Core i3-12100F",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 8,
            "base_clock_GHz": 3.3,
            "boost_clock_GHz": 4.3,
            "tdp_w": 60,
            "socket": "LGA1700"
        },
        "price_inr": 8000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbXHX9Bp6_6_t_kmkB-JxqnGmOohosj5AH9B3880QeLx67cF5u-_LsoqyO7sAYkIq7C0VF9OSDSji1cjl1uJnTidYC9KtWdZKGOsYVkFhQ1PQpxq-zLsZy",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "H610",
                "B660",
                "B760"
            ]
        }
    },
    {
        "_id": "cpu_intel_i5_12400f",
        "category": "cpu",
        "name": "Intel Core i5-12400F",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 2.5,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 10000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcZS5bXq_ojhl1271PngL0l31XuUII5Qf8CHWNLNQvvXzcg4C4mYFIczgDruqyNcJQHwspUfXtKEfUNgjwGUivkoQV1syFsoSTMtsa7fspVDZkyvFC5vun",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "Z690",
                "B760"
            ]
        }
    },
    {
        "_id": "cpu_intel_i5_13400f",
        "category": "cpu",
        "name": "Intel Core i5-13400F",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 16,
            "base_clock_GHz": 2.5,
            "boost_clock_GHz": 4.6,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 16000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUt4M9gN8R5gvcmsBHOWpaVkxMRsGSG7KRhlTiU1vhkMQzCWM1GoWMOOzI2ncWMHlbyoJ11yXPSAomZZHzHMc14U0S2lER3g4x-pe7AD3AmF39jI-7up1n",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "Z690",
                "B760"
            ]
        }
    },
    {
        "_id": "cpu_intel_i7_12700f",
        "category": "cpu",
        "name": "Intel Core i7-12700F",
        "brand": "Intel",
        "specs": {
            "cores": 12,
            "threads": 20,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 4.9,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 26000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFk6DHwk28Uag9f2EXGakM5MVIukwyYKboCKR7Q2ByOq1py5-fGezyK-e-ipa89pSBYryp5TJrdPZTgPOuMqoEqvvpX5xdJPT9JbX2-Cls",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_intel_i7_13700f",
        "category": "cpu",
        "name": "Intel Core i7-13700F",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 24,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 5.2,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 32000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8cO7LKuPLVcvZ-uoy6LEa2z_cJOYxT670WPqWVEEauSim7DB9CNvHUAreF5MhY4MFNKviKg0dqiNg-MFlRX88KMh2R8_FH4rlC8Ozols0iun0n0OugIIA_Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_amd_ryzen_5_7600",
        "category": "cpu",
        "name": "AMD Ryzen 5 7600",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.8,
            "boost_clock_GHz": 5.1,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 19000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ2UQhBqXkENDv8AI9ja4CU5nb9XbN2lmX4LGOjtPHCsVUsHpbrSyybVX7OvO2-OlzyBeivSNpOGXeoh63UGKDUIMcynTrKtSzqw4xyb1Vrgd_9RaTYPk92",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_amd_ryzen_7_7700x",
        "category": "cpu",
        "name": "AMD Ryzen 7 7700X",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 4.5,
            "boost_clock_GHz": 5.4,
            "tdp_w": 105,
            "socket": "AM5"
        },
        "price_inr": 30000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_0n2jrdbEiSeFmAKEEOx98tFrvLfe5nYlVXB9lzreVxzlw6q1-yk1H2agJheInHK5q52C7YuGWTApTRxLoUlumtMa8znTCceT2tVAxjuheyZYvhMeKTw9fw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_amd_ryzen_9_7900x",
        "category": "cpu",
        "name": "AMD Ryzen 9 7900X",
        "brand": "AMD",
        "specs": {
            "cores": 12,
            "threads": 24,
            "base_clock_GHz": 4.7,
            "boost_clock_GHz": 5.6,
            "tdp_w": 170,
            "socket": "AM5"
        },
        "price_inr": 54000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQj62-v9GsmS4xeAB40WRgM2ARF_Z7EmVSIC3RI8aV5qqsnB5uq4xuvfOYE5nHkFRVr3HUZlQips9DbUeURXvJnhYmywufmxsw5bqzdYZm8XitPPsCAxv4",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_intel_i9_12900k",
        "category": "cpu",
        "name": "Intel Core i9-12900K",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 24,
            "base_clock_GHz": 3.2,
            "boost_clock_GHz": 5.2,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 48000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWatz8F8wjAYiWe9vboRHbSVKOEVOQ9jhRf5FMZCn5IHVjR6Ti5wKKaEOcrmtUIBGs_PK8LIbb6oIO9vNO8eFxr2BDXxbiLdeKkcbY05Do",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_intel_i5_13600k",
        "category": "cpu",
        "name": "Intel Core i5-13600K",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 20,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": 5.1,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 26000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYlyrj-C_tJ4VNUaqGFxv5hntkKkn4qkkz4lsDOLDujZ05FHhEFt5BhhEFCZeSkqYrFQ9RB3uDD2xm4cjYQAU3wPBMpcgw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_amd_athlon_3000g",
        "category": "cpu",
        "name": "AMD Athlon 3000G",
        "brand": "AMD",
        "specs": {
            "cores": 2,
            "threads": 4,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": null,
            "tdp_w": 35,
            "socket": "AM4"
        },
        "price_inr": 4500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQY0En1_3GGWjnrII-GXlB2ISB_-Q16W9O7MP9yTISjPcTCf6VkgZQ5dg9HKNn073B2AOCizSDAHmhWv5ykz7csFF-b4VZhSONVZm9GXEa7",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_intel_pentium_gold_g7400",
        "category": "cpu",
        "name": "Intel Pentium Gold G7400",
        "brand": "Intel",
        "specs": {
            "cores": 2,
            "threads": 4,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": null,
            "tdp_w": 46,
            "socket": "LGA1700"
        },
        "price_inr": 5500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuYx8zVuBk2PKMXbYmU_XqaLR77cBEBlqXTEjJWCyOHcHWMhnuVIzkq-MU-4RkiDUQj-bwdKlfYa8iZshkVA0gsAqIM-Q7cm_5BfboUO5braHMWIpw0zpYmg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_amd_ryzen_3_4100",
        "category": "cpu",
        "name": "AMD Ryzen 3 4100",
        "brand": "AMD",
        "specs": {
            "cores": 4,
            "threads": 8,
            "base_clock_GHz": 3.8,
            "boost_clock_GHz": 4.0,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 7000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTicZD-ENXz_2apr6WeXJDbApMWmRK4AMc1RM0UrYDlgVBmLkcfwEiADvXHtQnezCn-rNusB4CZBct27nZgthIFCoxtRFyaGt1qKYjP-KLxlu8C51wzJDoD",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1650",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1650 4GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 75
        },
        "price_inr": 12000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSBIJj9EruJQiBnnxXSOIoRXzTBSiBianc_r_rhQQupnrwhcV3n8a3DtRgR2lC9xt9M3CtLTdKVCAc2Bu9VaQMhLPrVzRPKlFwkiV-Q7f7vLS2c1R_N8Lj",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2060",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 2060 6GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 6,
            "tdp_w": 160
        },
        "price_inr": 18000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTfPYu7no2V32Vgxp2dJwIXTXEetdWoDy648OcM7nGp-seO6dKcja61kWyMaoX0LkMgzwAhwet-Tf1wkpahD6xruAnuzpvjPcfP8avmXaQe5mX4Sk3W-_9",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3060",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3060 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 170
        },
        "price_inr": 26000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmDYVa94vIne35j7rgaSx_3GptfguOZhE8Hb4AXmvg60ts4QKDkdos4Yv9AJE8-d87IiRXlPF7dpC5FR8pEtInQpHLGpXBQIy7kbsDADCbUVns70sB7Tbb8A",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4060",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4060 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 115
        },
        "price_inr": 32000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSf0TDMGWqdL86GPW78mmIPyvAIxH73OLUmSflLclk9nhSz42dPVqD0MjYQAj2MGcWQFa1abvum-aY_ZG2OMCGg2GxQav3I6sn8FMGsL-5qjv5ubicN7m0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4070",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4070 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 200
        },
        "price_inr": 70000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTyFlx2nAblfjtuPt_mhmVcSt1K1V0fov_KYq36z0sTmtB-TMFC7l9B7IdRqNv19pEoD4t4xlxw3LbVeVpmCtvp9aMOhKUBCjI9az2UORIe",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4080",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4080 16GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 320
        },
        "price_inr": 160000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQHfRD07zlc-y2uBb3oZZd8sEso9gwa-bNiGWBBtjPetVDmBm44rEBx5bOi6ZCRHnsXRsOiSCZdPUrIyOc7wkMvoRT-AfUt8UizYofMgU2wRK2eDu6T0EhTHQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_580",
        "category": "gpu",
        "name": "AMD Radeon RX 580 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 185
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJs306fywCBk06LUlGX3SVP4pJXpsC1WojxKGbZWpCCeBQGJ63EirUb8swrDys3l_dod01nx6M7mC7_jaVHjQ9BnIO0paUrD7WMlCo-SWf5MeA6qPVwnEYWg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6600",
        "category": "gpu",
        "name": "AMD Radeon RX 6600 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 132
        },
        "price_inr": 22000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZfYDnTjtLC-0-9e9bX0613fhiK9eiuKVBWP1u7DI3YH9xCChjbEFDUJsvZXBAINfBc2YItA6aDcYrpr2Zk2yJJgQ5O2Y9XM6jvLk5Ue8wtPh4DDlJP3zi",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7600",
        "category": "gpu",
        "name": "AMD Radeon RX 7600 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 165
        },
        "price_inr": 24000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0JT4vfx2looD86PXLxAMioYeyj-FazSIELbySPyKB9tiMS7CGrA2ACw5nlpSRsy4589OjHbE0fGsl0Wel2sWrlM5bdMvDRfft3J5XXP7nNejxOtkLwTo_ww",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cpu_amd_ryzen_5_5600xt",
        "category": "cpu",
        "name": "AMD Ryzen 5 5600XT",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 17000,
        "image_url": "https://m.media-amazon.com/images/I/61RDXIvWNML._AC_.jpg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_5600t",
        "category": "cpu",
        "name": "AMD Ryzen 5 5600T",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": 4.5,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 15000,
        "image_url": "https://images.search.yahoo.com/images/view;_ylt=AwrOowK_kpRp8Mo2NGWJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzhjZjNmZDk4ZjU4MDQ0ZjQ5MWM3Yzg3YjkxMzhkMzc1BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcpu_amd_ryzen_5_5600t%26type%3DE210US1274G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=1200&h=1200&imgurl=www.amd.com%2Fcontent%2Fdam%2Famd%2Fen%2Fimages%2Fproducts%2Fprocessors%2Fryzen%2F2505503-ryzen-5-5600x.jpg&rurl=https%3A%2F%2Fwww.amd.com%2Fja%2Fproducts%2Fprocessors%2Fdesktops%2Fryzen%2F5000-series%2Famd-ryzen-5-5600t.html&size=96KB&p=cpu_amd_ryzen_5_5600t&oid=8cf3fd98f58044f491c7c87b9138d375&fr2=piv-web&fr=mcafee&tt=AMD+Ryzen%E2%84%A2+5+5600T&b=0&ni=21&no=1&ts=&tab=organic&sigr=rfPlMU74RO1q&sigb=tGrH5D2W7nHe&sigi=HWIxI5FNORKE&sigt=rOERRTzaDRwP&.crumb=8jqEdn5iVVB&fr=mcafee&fr2=piv-web&type=E210US1274G0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_5600f",
        "category": "cpu",
        "name": "AMD Ryzen 5 5600F",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.0,
            "boost_clock_GHz": 4.0,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 13000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.QAIg8iDnADu7Sx-e4BjSmAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_5500",
        "category": "cpu",
        "name": "AMD Ryzen 5 5500",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.6,
            "boost_clock_GHz": 4.2,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 11000,
        "image_url": "https://images.search.yahoo.com/images/view;_ylt=AwrjZFwDk5RpcJYCBW.JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzE3ZmQ0MGNjNTZjOWM3ODFjMTRiNTg1MDM0MDIwZjUxBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcpu_amd_ryzen_5_5500%26ei%3DUTF-8%26type%3DE210US1274G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D1&w=1000&h=887&imgurl=brain-images-ssl.cdn.dixons.com%2F8%2F3%2F10237838%2Fu_10237838.jpg&rurl=https%3A%2F%2Fwww.currys.ie%2Fieen%2Fcomputing-accessories%2Fcomponents-upgrades%2Fprocessors%2Famd-ryzen-5-5500-processor-10237838-pdt.html&size=69KB&p=cpu_amd_ryzen_5_5500&oid=17fd40cc56c9c781c14b585034020f51&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=AMD+Ryzen+5+5500+Processor+Fast+Delivery+%7C+Currysie&b=0&ni=125&no=1&ts=&tab=organic&sigr=oFlV0qlweqxZ&sigb=s3KhhijHX8WU&sigi=VFn6Ywd_C7XV&sigt=EUg.Il324UGf&.crumb=8jqEdn5iVVB&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US1274G0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "A520",
                "B450",
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_5500u",
        "category": "cpu",
        "name": "AMD Ryzen 5 5500U",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 4.0,
            "tdp_w": 15,
            "socket": "FP6"
        },
        "price_inr": 10000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.93jtl5kHFVgf-jDFHlp3ZQAAAA?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_5600g",
        "category": "cpu",
        "name": "AMD Ryzen 5 5600G",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.9,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 14000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP._HGholyYc8tCK7fJZoa62wHaH6?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "A520",
                "B450",
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_5600x3d",
        "category": "cpu",
        "name": "AMD Ryzen 5 5600X3D",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.3,
            "boost_clock_GHz": 4.4,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 20000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.mswXaodFUt5-f9uhdxSZRgHaDt?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_5500x3d",
        "category": "cpu",
        "name": "AMD Ryzen 5 5500X3D",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.0,
            "boost_clock_GHz": 4.0,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 18000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.kvGYerYfeZkp3sw5S2sgVgHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_7600x",
        "category": "cpu",
        "name": "AMD Ryzen 5 7600X",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 4.7,
            "boost_clock_GHz": 5.3,
            "tdp_w": 105,
            "socket": "AM5"
        },
        "price_inr": 23000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.4ln_Z7dLlg08-3FBe3SNZwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_7600x3d",
        "category": "cpu",
        "name": "AMD Ryzen 5 7600X3D",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 4.1,
            "boost_clock_GHz": 5.3,
            "tdp_w": 120,
            "socket": "AM5"
        },
        "price_inr": 26000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.fryMRpT-EpOETUuaxQc4swHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_8400f",
        "category": "cpu",
        "name": "AMD Ryzen 5 8400F",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 4.2,
            "boost_clock_GHz": 5.1,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 19000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.ERhYZW6Jwe8TMjyzwc-JZgHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_8500g",
        "category": "cpu",
        "name": "AMD Ryzen 5 8500G",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 4.1,
            "boost_clock_GHz": 5.0,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 22000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.qwoQDkpoEuFrw4jiD_MHCAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_8600g",
        "category": "cpu",
        "name": "AMD Ryzen 5 8600G",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 4.3,
            "boost_clock_GHz": 5.0,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 24000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.s9fuAqSoqNjKEa5bQlFVsgHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_9600",
        "category": "cpu",
        "name": "AMD Ryzen 5 9600",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.8,
            "boost_clock_GHz": 5.4,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 25000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.s9fuAqSoqNjKEa5bQlFVsgHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_9600x",
        "category": "cpu",
        "name": "AMD Ryzen 5 9600X",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.9,
            "boost_clock_GHz": 5.4,
            "tdp_w": 105,
            "socket": "AM5"
        },
        "price_inr": 28000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.s9fuAqSoqNjKEa5bQlFVsgHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_5_9600x3d",
        "category": "cpu",
        "name": "AMD Ryzen 5 9600X3D",
        "brand": "AMD",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.9,
            "boost_clock_GHz": 5.4,
            "tdp_w": 120,
            "socket": "AM5"
        },
        "price_inr": 31000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.sgASIGboFKDorcmB4GTR1AHaEJ?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_5700",
        "category": "cpu",
        "name": "AMD Ryzen 7 5700",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.4,
            "boost_clock_GHz": 4.6,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 17000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.PjhRtRmEsiPYHq4yYzlN3AHaGW?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_5800x3d",
        "category": "cpu",
        "name": "AMD Ryzen 7 5800X3D",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.4,
            "boost_clock_GHz": 4.5,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 28000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.-t1BMY4_Riv1y4XCyHR7KAHaEK?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_5800xt",
        "category": "cpu",
        "name": "AMD Ryzen 7 5800XT",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.8,
            "boost_clock_GHz": 4.8,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 24000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP._u-itO8DqPjtshZ3qUDhfgHaEK?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_5700x3d",
        "category": "cpu",
        "name": "AMD Ryzen 7 5700X3D",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.0,
            "boost_clock_GHz": 4.1,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 25000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.DhyLPWwfH-Ulu6vdcfPD-AHaFZ?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_7700",
        "category": "cpu",
        "name": "AMD Ryzen 7 7700",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.8,
            "boost_clock_GHz": 5.3,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 26000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.lfTLVt5N-9_-J5fTXjfqCQHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_7800x3d",
        "category": "cpu",
        "name": "AMD Ryzen 7 7800X3D",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 4.2,
            "boost_clock_GHz": 5.0,
            "tdp_w": 120,
            "socket": "AM5"
        },
        "price_inr": 35000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.lfTLVt5N-9_-J5fTXjfqCQHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_8700g",
        "category": "cpu",
        "name": "AMD Ryzen 7 8700G",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 4.2,
            "boost_clock_GHz": 5.1,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 32000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.lfTLVt5N-9_-J5fTXjfqCQHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_8700f",
        "category": "cpu",
        "name": "AMD Ryzen 7 8700F",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 4.1,
            "boost_clock_GHz": 5.0,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 30000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.lfTLVt5N-9_-J5fTXjfqCQHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_9700x",
        "category": "cpu",
        "name": "AMD Ryzen 7 9700X",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.8,
            "boost_clock_GHz": 5.5,
            "tdp_w": 105,
            "socket": "AM5"
        },
        "price_inr": 34000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.qHrRz4fZIA0msVANeBw_EAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_7_9800x3d",
        "category": "cpu",
        "name": "AMD Ryzen 7 9800X3D",
        "brand": "AMD",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 4.7,
            "boost_clock_GHz": 5.7,
            "tdp_w": 120,
            "socket": "AM5"
        },
        "price_inr": 40000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.t9hVBHxllKFS7Cq10TCtQQHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_5900",
        "category": "cpu",
        "name": "AMD Ryzen 9 5900",
        "brand": "AMD",
        "specs": {
            "cores": 12,
            "threads": 24,
            "base_clock_GHz": 3.0,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 28000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.-lDSLvPnMSItBw7PpmKaawHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_5950x",
        "category": "cpu",
        "name": "AMD Ryzen 9 5950X",
        "brand": "AMD",
        "specs": {
            "cores": 16,
            "threads": 32,
            "base_clock_GHz": 3.4,
            "boost_clock_GHz": 4.9,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 45000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.-lDSLvPnMSItBw7PpmKaawHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_5900xt",
        "category": "cpu",
        "name": "AMD Ryzen 9 5900XT",
        "brand": "AMD",
        "specs": {
            "cores": 12,
            "threads": 24,
            "base_clock_GHz": 3.3,
            "boost_clock_GHz": 4.8,
            "tdp_w": 105,
            "socket": "AM4"
        },
        "price_inr": 32000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.-lDSLvPnMSItBw7PpmKaawHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_5945",
        "category": "cpu",
        "name": "AMD Ryzen 9 5945",
        "brand": "AMD",
        "specs": {
            "cores": 12,
            "threads": 24,
            "base_clock_GHz": 3.0,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "AM4"
        },
        "price_inr": 31000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.-lDSLvPnMSItBw7PpmKaawHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B550",
                "X570"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_7900",
        "category": "cpu",
        "name": "AMD Ryzen 9 7900",
        "brand": "AMD",
        "specs": {
            "cores": 12,
            "threads": 24,
            "base_clock_GHz": 4.7,
            "boost_clock_GHz": 5.4,
            "tdp_w": 65,
            "socket": "AM5"
        },
        "price_inr": 36000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.7eqnCtsggQ3mwbH_gOTOgQHaEJ?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B650",
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_7950x",
        "category": "cpu",
        "name": "AMD Ryzen 9 7950X",
        "brand": "AMD",
        "specs": {
            "cores": 16,
            "threads": 32,
            "base_clock_GHz": 4.5,
            "boost_clock_GHz": 5.7,
            "tdp_w": 230,
            "socket": "AM5"
        },
        "price_inr": 60000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.7eqnCtsggQ3mwbH_gOTOgQHaEJ?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_7950x3d",
        "category": "cpu",
        "name": "AMD Ryzen 9 7950X3D",
        "brand": "AMD",
        "specs": {
            "cores": 16,
            "threads": 32,
            "base_clock_GHz": 4.2,
            "boost_clock_GHz": 5.7,
            "tdp_w": 230,
            "socket": "AM5"
        },
        "price_inr": 70000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.7eqnCtsggQ3mwbH_gOTOgQHaEJ?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_9900x",
        "category": "cpu",
        "name": "AMD Ryzen 9 9900X",
        "brand": "AMD",
        "specs": {
            "cores": 12,
            "threads": 24,
            "base_clock_GHz": 4.3,
            "boost_clock_GHz": 5.6,
            "tdp_w": 170,
            "socket": "AM5"
        },
        "price_inr": 48000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.mCmRw6SsKAST8lP9CqGwbQHaEn?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_9950x",
        "category": "cpu",
        "name": "AMD Ryzen 9 9950X",
        "brand": "AMD",
        "specs": {
            "cores": 16,
            "threads": 32,
            "base_clock_GHz": 4.3,
            "boost_clock_GHz": 5.7,
            "tdp_w": 170,
            "socket": "AM5"
        },
        "price_inr": 65000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.mCmRw6SsKAST8lP9CqGwbQHaEn?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_9950x3d",
        "category": "cpu",
        "name": "AMD Ryzen 9 9950X3D",
        "brand": "AMD",
        "specs": {
            "cores": 16,
            "threads": 32,
            "base_clock_GHz": 4.3,
            "boost_clock_GHz": 5.7,
            "tdp_w": 170,
            "socket": "AM5"
        },
        "price_inr": 75000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.mCmRw6SsKAST8lP9CqGwbQHaEn?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_amd_ryzen_9_9900x3d",
        "category": "cpu",
        "name": "AMD Ryzen 9 9900X3D",
        "brand": "AMD",
        "specs": {
            "cores": 12,
            "threads": 24,
            "base_clock_GHz": 4.3,
            "boost_clock_GHz": 5.6,
            "tdp_w": 170,
            "socket": "AM5"
        },
        "price_inr": 55000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.mCmRw6SsKAST8lP9CqGwbQHaEn?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "X670"
            ],
            "max_ram_speed_mhz": 5200
        }
    },
    {
        "_id": "cpu_intel_core_i3_9100",
        "category": "cpu",
        "name": "Intel Core i3‑9100",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 4,
            "base_clock_GHz": 3.6,
            "boost_clock_GHz": 4.2,
            "tdp_w": 65,
            "socket": "LGA1151"
        },
        "price_inr": 7000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.0bLiGjfHlW3nFRQg118logHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B360",
                "B365",
                "H370",
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i3_9300",
        "category": "cpu",
        "name": "Intel Core i3‑9300",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 4,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 4.3,
            "tdp_w": 65,
            "socket": "LGA1151"
        },
        "price_inr": 8000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.IKpVpWJL0F3T_A1bCt-PAwHaE8?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B360",
                "B365",
                "H370",
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i5_9400",
        "category": "cpu",
        "name": "Intel Core i5‑9400",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 6,
            "base_clock_GHz": 2.9,
            "boost_clock_GHz": 4.1,
            "tdp_w": 65,
            "socket": "LGA1151"
        },
        "price_inr": 12000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.pS1Wpc4P9wGLZa4ax-Q6rAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B360",
                "B365",
                "H370",
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i5_9400f",
        "category": "cpu",
        "name": "Intel Core i5‑9400F",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 6,
            "base_clock_GHz": 2.9,
            "boost_clock_GHz": 4.1,
            "tdp_w": 65,
            "socket": "LGA1151"
        },
        "price_inr": 11000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.pS1Wpc4P9wGLZa4ax-Q6rAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B360",
                "B365",
                "H370",
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i5_9600k",
        "category": "cpu",
        "name": "Intel Core i5‑9600K",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 6,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 4.6,
            "tdp_w": 95,
            "socket": "LGA1151"
        },
        "price_inr": 15000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.pS1Wpc4P9wGLZa4ax-Q6rAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i7_9700",
        "category": "cpu",
        "name": "Intel Core i7‑9700",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 8,
            "base_clock_GHz": 3.0,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "LGA1151"
        },
        "price_inr": 20000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.kaQauQ-1lQWSP3xEoD3avwHaEK?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B360",
                "B365",
                "H370",
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i7_9700k",
        "category": "cpu",
        "name": "Intel Core i7‑9700K",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 8,
            "base_clock_GHz": 3.6,
            "boost_clock_GHz": 4.9,
            "tdp_w": 95,
            "socket": "LGA1151"
        },
        "price_inr": 23000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.kaQauQ-1lQWSP3xEoD3avwHaEK?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i9_9900",
        "category": "cpu",
        "name": "Intel Core i9‑9900",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.1,
            "boost_clock_GHz": 5.0,
            "tdp_w": 65,
            "socket": "LGA1151"
        },
        "price_inr": 26000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.Fs_Kyoz7rE3oy4IpZoKdugHaGo?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B360",
                "B365",
                "H370",
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i9_9900k",
        "category": "cpu",
        "name": "Intel Core i9‑9900K",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.6,
            "boost_clock_GHz": 5.0,
            "tdp_w": 95,
            "socket": "LGA1151"
        },
        "price_inr": 30000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.Fs_Kyoz7rE3oy4IpZoKdugHaGo?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i9_9900ks",
        "category": "cpu",
        "name": "Intel Core i9‑9900KS",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 4.0,
            "boost_clock_GHz": 5.0,
            "tdp_w": 127,
            "socket": "LGA1151"
        },
        "price_inr": 35000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.Fs_Kyoz7rE3oy4IpZoKdugHaGo?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z370",
                "Z390"
            ],
            "max_ram_speed_mhz": 2666
        }
    },
    {
        "_id": "cpu_intel_core_i3_10100",
        "category": "cpu",
        "name": "Intel Core i3‑10100",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 8,
            "base_clock_GHz": 3.6,
            "boost_clock_GHz": 4.3,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 9000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.id-UFhMyzyfgKEMmTwh21QHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B460",
                "B560",
                "H470",
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i3_10300",
        "category": "cpu",
        "name": "Intel Core i3‑10300",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 8,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 10000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.6QzLC9UQrR8EJCF_yWdH9wHaH_?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B460",
                "B560",
                "H470",
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i5_10400",
        "category": "cpu",
        "name": "Intel Core i5‑10400",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 2.9,
            "boost_clock_GHz": 4.3,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 13000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.zq-X6LorogU1Qrjf5H9OEwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B460",
                "B560",
                "H470",
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i5_10400f",
        "category": "cpu",
        "name": "Intel Core i5‑10400F",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 2.9,
            "boost_clock_GHz": 4.3,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 12000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.zq-X6LorogU1Qrjf5H9OEwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B460",
                "B560",
                "H470",
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i5_10500",
        "category": "cpu",
        "name": "Intel Core i5‑10500",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.1,
            "boost_clock_GHz": 4.5,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 14000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.zq-X6LorogU1Qrjf5H9OEwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B460",
                "B560",
                "H470",
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i5_10600k",
        "category": "cpu",
        "name": "Intel Core i5‑10600K",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 4.1,
            "boost_clock_GHz": 4.8,
            "tdp_w": 125,
            "socket": "LGA1200"
        },
        "price_inr": 18000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.TPTXTm_8DURI7zkxLjx2GwHaI1?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i7_10700",
        "category": "cpu",
        "name": "Intel Core i7‑10700",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 2.9,
            "boost_clock_GHz": 4.8,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 22000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.gXLXwFhYsaqD-xE_GfDwPgHaGL?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B460",
                "B560",
                "H470",
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i7_10700f",
        "category": "cpu",
        "name": "Intel Core i7‑10700F",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 2.9,
            "boost_clock_GHz": 4.8,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 21000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.gXLXwFhYsaqD-xE_GfDwPgHaGL?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B460",
                "B560",
                "H470",
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i7_10700k",
        "category": "cpu",
        "name": "Intel Core i7‑10700K",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.8,
            "boost_clock_GHz": 5.1,
            "tdp_w": 125,
            "socket": "LGA1200"
        },
        "price_inr": 26000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.hd9rjTPyJ1uLhTjG9BBruwHaI0?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i9_10850k",
        "category": "cpu",
        "name": "Intel Core i9‑10850K",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 20,
            "base_clock_GHz": 3.6,
            "boost_clock_GHz": 5.2,
            "tdp_w": 125,
            "socket": "LGA1200"
        },
        "price_inr": 32000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.1TtJuVcO6MaseXNa1WB9ugHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i9_10900",
        "category": "cpu",
        "name": "Intel Core i9‑10900",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 20,
            "base_clock_GHz": 2.8,
            "boost_clock_GHz": 5.2,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 30000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.1TtJuVcO6MaseXNa1WB9ugHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B460",
                "B560",
                "H470",
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i9_10900k",
        "category": "cpu",
        "name": "Intel Core i9‑10900K",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 20,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 5.3,
            "tdp_w": 125,
            "socket": "LGA1200"
        },
        "price_inr": 36000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.u92C9v52HjtOz_xDb0j-dwHaHb?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z490",
                "Z590"
            ],
            "max_ram_speed_mhz": 2933
        }
    },
    {
        "_id": "cpu_intel_core_i3_11100",
        "category": "cpu",
        "name": "Intel Core i3‑11100",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 8,
            "base_clock_GHz": 3.9,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 10000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.HNRGVty6bhSlo-GqngvRswHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B560",
                "H570",
                "Z590"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_11400",
        "category": "cpu",
        "name": "Intel Core i5‑11400",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 2.6,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 15000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.TfC6tRkPyxQITzdA8-ipNAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B560",
                "H570",
                "Z590"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_11400f",
        "category": "cpu",
        "name": "Intel Core i5‑11400F",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 2.6,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 14000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.TfC6tRkPyxQITzdA8-ipNAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B560",
                "H570",
                "Z590"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_11600k",
        "category": "cpu",
        "name": "Intel Core i5‑11600K",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.9,
            "boost_clock_GHz": 4.9,
            "tdp_w": 125,
            "socket": "LGA1200"
        },
        "price_inr": 19000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.TfC6tRkPyxQITzdA8-ipNAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z590"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_11700",
        "category": "cpu",
        "name": "Intel Core i7‑11700",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 2.5,
            "boost_clock_GHz": 4.9,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 24000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.l9oNH03UwrC-477Q9vL0bgHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B560",
                "H570",
                "Z590"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_11700k",
        "category": "cpu",
        "name": "Intel Core i7‑11700K",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.6,
            "boost_clock_GHz": 5.0,
            "tdp_w": 125,
            "socket": "LGA1200"
        },
        "price_inr": 28000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.l9oNH03UwrC-477Q9vL0bgHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z590"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i9_11900",
        "category": "cpu",
        "name": "Intel Core i9‑11900",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 2.5,
            "boost_clock_GHz": 5.2,
            "tdp_w": 65,
            "socket": "LGA1200"
        },
        "price_inr": 32000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.XcB5D7Ip16tWU409_w4pZwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B560",
                "H570",
                "Z590"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i9_11900k",
        "category": "cpu",
        "name": "Intel Core i9‑11900K",
        "brand": "Intel",
        "specs": {
            "cores": 8,
            "threads": 16,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": 5.3,
            "tdp_w": 125,
            "socket": "LGA1200"
        },
        "price_inr": 36000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.8bs1GCCgZ6Hq-4JRlBuhDAHaHZ?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z590"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i3_12100",
        "category": "cpu",
        "name": "Intel Core i3‑12100",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 8,
            "base_clock_GHz": 3.3,
            "boost_clock_GHz": 4.3,
            "tdp_w": 60,
            "socket": "LGA1700"
        },
        "price_inr": 11000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.Ytg1KfK2JtV671mzBZMCCQHaD4?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_12400",
        "category": "cpu",
        "name": "Intel Core i5‑12400",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 2.5,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 16000,
        "image_url": "https://images.search.yahoo.com/images/view;_ylt=Awrg4yvEq5RpxvU54N2JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzIwMDg3YWZlMWY4OGExYzc4MzNlOTgzZDVlMmFkOGE5BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcpu_intel_core_i5_12400%26ei%3DUTF-8%26type%3DE210US1274G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D1&w=800&h=800&imgurl=sistemasrjd.com%2F6520-large_default%2Fintel-core-i5-12400-s-1700-250ghz-6-core-18mb-smart-cache-processor-12th-generation.jpg&rurl=https%3A%2F%2Fsistemasrjd.com%2Fen%2Fintel%2F2725-intel-core-i5-12400-s-1700-250ghz-6-core-18mb-smart-cache-processor-12th-generation.html&size=380KB&p=cpu_intel_core_i5_12400&oid=20087afe1f88a1c7833e983d5e2ad8a9&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Intel+Core+i5-12400+S-1700+2.50GHz+6-Core+18MB+Smart+Cache+Processor+%2812th+Generation%29%2CIntel%2CThe+...&b=0&ni=125&no=1&ts=&tab=organic&sigr=eE2QtR7QyCTE&sigb=M3_95yfj1TcY&sigi=UdbMbhjo3EwU&sigt=7fTsYfAWmGwy&.crumb=8jqEdn5iVVB&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US1274G0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_12400f",
        "category": "cpu",
        "name": "Intel Core i5‑12400F",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 2.5,
            "boost_clock_GHz": 4.4,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 15000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.SESzkBoT1H1l96X3rGvvRAHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_12500",
        "category": "cpu",
        "name": "Intel Core i5‑12500",
        "brand": "Intel",
        "specs": {
            "cores": 6,
            "threads": 12,
            "base_clock_GHz": 3.0,
            "boost_clock_GHz": 4.6,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 17000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.E4JmWo9z2fWEfmYAQFtEzwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_12600k",
        "category": "cpu",
        "name": "Intel Core i5‑12600K",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 16,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 4.9,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 22000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.E4JmWo9z2fWEfmYAQFtEzwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_12700",
        "category": "cpu",
        "name": "Intel Core i7‑12700",
        "brand": "Intel",
        "specs": {
            "cores": 12,
            "threads": 20,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 4.9,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 28000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.RTMbblEldi-XWumZ4p9DSwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_12700f",
        "category": "cpu",
        "name": "Intel Core i7‑12700F",
        "brand": "Intel",
        "specs": {
            "cores": 12,
            "threads": 20,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 4.9,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 27000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.RTMbblEldi-XWumZ4p9DSwHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_12700k",
        "category": "cpu",
        "name": "Intel Core i7‑12700K",
        "brand": "Intel",
        "specs": {
            "cores": 12,
            "threads": 20,
            "base_clock_GHz": 3.6,
            "boost_clock_GHz": 5.0,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 32000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.7PINUhWLfzak5MzvjF7QOwHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i9_12900",
        "category": "cpu",
        "name": "Intel Core i9‑12900",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 24,
            "base_clock_GHz": 2.4,
            "boost_clock_GHz": 5.1,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 40000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.SY7OkuGvGYB9foXEViq_5QHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i9_12900k",
        "category": "cpu",
        "name": "Intel Core i9‑12900K",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 24,
            "base_clock_GHz": 3.2,
            "boost_clock_GHz": 5.2,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 45000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.SY7OkuGvGYB9foXEViq_5QHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i3_13100",
        "category": "cpu",
        "name": "Intel Core i3‑13100",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 8,
            "base_clock_GHz": 3.4,
            "boost_clock_GHz": 4.5,
            "tdp_w": 60,
            "socket": "LGA1700"
        },
        "price_inr": 12000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.r0eAjCJ7fyIenxHME9ufPgHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_13400",
        "category": "cpu",
        "name": "Intel Core i5‑13400",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 16,
            "base_clock_GHz": 2.5,
            "boost_clock_GHz": 4.6,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 18000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.PrMOA2Im2W_viu8QeIm2ggHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_13400f",
        "category": "cpu",
        "name": "Intel Core i5‑13400F",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 16,
            "base_clock_GHz": 2.5,
            "boost_clock_GHz": 4.6,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 17000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.PrMOA2Im2W_viu8QeIm2ggHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_13600k",
        "category": "cpu",
        "name": "Intel Core i5‑13600K",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 20,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": 5.1,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 25000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.PrMOA2Im2W_viu8QeIm2ggHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_13700",
        "category": "cpu",
        "name": "Intel Core i7‑13700",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 24,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 5.2,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 32000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.VB6KJyvHtRZ7XinLsKEOhgHaFc?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_13700f",
        "category": "cpu",
        "name": "Intel Core i7‑13700F",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 24,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 5.2,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 31000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.VB6KJyvHtRZ7XinLsKEOhgHaFc?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_13700k",
        "category": "cpu",
        "name": "Intel Core i7‑13700K",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 24,
            "base_clock_GHz": 3.4,
            "boost_clock_GHz": 5.4,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 38000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.VB6KJyvHtRZ7XinLsKEOhgHaFc?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i9_13900",
        "category": "cpu",
        "name": "Intel Core i9‑13900",
        "brand": "Intel",
        "specs": {
            "cores": 24,
            "threads": 32,
            "base_clock_GHz": 2.0,
            "boost_clock_GHz": 5.6,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 50000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.eVA3WAtGcNDXFexqhuWfPgHaJF?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i9_13900k",
        "category": "cpu",
        "name": "Intel Core i9‑13900K",
        "brand": "Intel",
        "specs": {
            "cores": 24,
            "threads": 32,
            "base_clock_GHz": 3.0,
            "boost_clock_GHz": 5.8,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 60000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.eVA3WAtGcNDXFexqhuWfPgHaJF?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i3_14100",
        "category": "cpu",
        "name": "Intel Core i3‑14100",
        "brand": "Intel",
        "specs": {
            "cores": 4,
            "threads": 8,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": 4.7,
            "tdp_w": 60,
            "socket": "LGA1700"
        },
        "price_inr": 13000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.kucTvcFU_1fMnz2AB3SgjAHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_14400",
        "category": "cpu",
        "name": "Intel Core i5‑14400",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 16,
            "base_clock_GHz": 2.7,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 19000,
        "image_url": "",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_14400f",
        "category": "cpu",
        "name": "Intel Core i5‑14400F",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 16,
            "base_clock_GHz": 2.7,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 18000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.4lpke7-kl4RsYRzEmkFeYQHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i5_14600k",
        "category": "cpu",
        "name": "Intel Core i5‑14600K",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 20,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": 5.3,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 26000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.4lpke7-kl4RsYRzEmkFeYQHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_14700",
        "category": "cpu",
        "name": "Intel Core i7‑14700",
        "brand": "Intel",
        "specs": {
            "cores": 20,
            "threads": 28,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 5.4,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 35000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP._7b_Cjfm46UpMnexWqTLygHaIl?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_14700f",
        "category": "cpu",
        "name": "Intel Core i7‑14700F",
        "brand": "Intel",
        "specs": {
            "cores": 20,
            "threads": 28,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 5.4,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 34000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.R3z5yKC8EJf1x5PdnucA-gHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i7_14700k",
        "category": "cpu",
        "name": "Intel Core i7‑14700K",
        "brand": "Intel",
        "specs": {
            "cores": 20,
            "threads": 28,
            "base_clock_GHz": 3.4,
            "boost_clock_GHz": 5.6,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 42000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.R3z5yKC8EJf1x5PdnucA-gHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i9_14900",
        "category": "cpu",
        "name": "Intel Core i9‑14900",
        "brand": "Intel",
        "specs": {
            "cores": 24,
            "threads": 32,
            "base_clock_GHz": 2.0,
            "boost_clock_GHz": 6.0,
            "tdp_w": 65,
            "socket": "LGA1700"
        },
        "price_inr": 55000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.e4f0BcktFtzorCrD2PMmaAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B660",
                "B760",
                "H610",
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_i9_14900k",
        "category": "cpu",
        "name": "Intel Core i9‑14900K",
        "brand": "Intel",
        "specs": {
            "cores": 24,
            "threads": 32,
            "base_clock_GHz": 3.2,
            "boost_clock_GHz": 6.0,
            "tdp_w": 125,
            "socket": "LGA1700"
        },
        "price_inr": 65000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.MoDQYoQ9P5NXT9W9UwHtyAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z690",
                "Z790"
            ],
            "max_ram_speed_mhz": 3200
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_125h",
        "category": "cpu",
        "name": "Intel Core Ultra 5 125H",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 18,
            "base_clock_GHz": 1.2,
            "boost_clock_GHz": 4.5,
            "tdp_w": 28,
            "socket": "BGA1964"
        },
        "price_inr": 25000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.J_lrSAiKcZrjSAgxsT690AAAAA?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_135u",
        "category": "cpu",
        "name": "Intel Core Ultra 5 135U",
        "brand": "Intel",
        "specs": {
            "cores": 12,
            "threads": 14,
            "base_clock_GHz": 1.6,
            "boost_clock_GHz": 4.4,
            "tdp_w": 15,
            "socket": "BGA1964"
        },
        "price_inr": 22000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.jITMOG1j9pPUy3AqD6YHngHaEG?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_135ul",
        "category": "cpu",
        "name": "Intel Core Ultra 5 135UL",
        "brand": "Intel",
        "specs": {
            "cores": 12,
            "threads": 14,
            "base_clock_GHz": 1.6,
            "boost_clock_GHz": 4.4,
            "tdp_w": 12,
            "socket": "BGA1964"
        },
        "price_inr": 21000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.zeXW0-kgSZeetnbzIIPPqQHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_135hl",
        "category": "cpu",
        "name": "Intel Core Ultra 5 135HL",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 18,
            "base_clock_GHz": 1.7,
            "boost_clock_GHz": 4.6,
            "tdp_w": 28,
            "socket": "BGA1964"
        },
        "price_inr": 26000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.kucf1cPQh3kT5kwtG4A2kAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_225",
        "category": "cpu",
        "name": "Intel Core Ultra 5 225",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 10,
            "base_clock_GHz": 3.3,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "LGA1851"
        },
        "price_inr": 24000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.b2nYlI-UeX2_96QYzi4wzwHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B860",
                "H810",
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_225f",
        "category": "cpu",
        "name": "Intel Core Ultra 5 225F",
        "brand": "Intel",
        "specs": {
            "cores": 10,
            "threads": 10,
            "base_clock_GHz": 3.3,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "LGA1851"
        },
        "price_inr": 23000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.b2nYlI-UeX2_96QYzi4wzwHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B860",
                "H810",
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_235",
        "category": "cpu",
        "name": "Intel Core Ultra 5 235",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 14,
            "base_clock_GHz": 3.4,
            "boost_clock_GHz": 4.7,
            "tdp_w": 65,
            "socket": "LGA1851"
        },
        "price_inr": 27000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.b2nYlI-UeX2_96QYzi4wzwHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B860",
                "H810",
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_235h",
        "category": "cpu",
        "name": "Intel Core Ultra 5 235H",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 14,
            "base_clock_GHz": 2.4,
            "boost_clock_GHz": 4.7,
            "tdp_w": 45,
            "socket": "BGA1964"
        },
        "price_inr": 28000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.kucf1cPQh3kT5kwtG4A2kAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_235hx",
        "category": "cpu",
        "name": "Intel Core Ultra 5 235HX",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 14,
            "base_clock_GHz": 2.9,
            "boost_clock_GHz": 4.7,
            "tdp_w": 55,
            "socket": "BGA1964"
        },
        "price_inr": 30000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.kucf1cPQh3kT5kwtG4A2kAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_245",
        "category": "cpu",
        "name": "Intel Core Ultra 5 245",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 14,
            "base_clock_GHz": 3.5,
            "boost_clock_GHz": 4.8,
            "tdp_w": 65,
            "socket": "LGA1851"
        },
        "price_inr": 29000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.kucf1cPQh3kT5kwtG4A2kAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B860",
                "H810",
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_245k",
        "category": "cpu",
        "name": "Intel Core Ultra 5 245K",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 14,
            "base_clock_GHz": 4.2,
            "boost_clock_GHz": 5.1,
            "tdp_w": 125,
            "socket": "LGA1851"
        },
        "price_inr": 33000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.kucf1cPQh3kT5kwtG4A2kAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_5_245kf",
        "category": "cpu",
        "name": "Intel Core Ultra 5 245KF",
        "brand": "Intel",
        "specs": {
            "cores": 14,
            "threads": 14,
            "base_clock_GHz": 4.2,
            "boost_clock_GHz": 5.1,
            "tdp_w": 125,
            "socket": "LGA1851"
        },
        "price_inr": 32000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.kucf1cPQh3kT5kwtG4A2kAHaHa?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_7_155h",
        "category": "cpu",
        "name": "Intel Core Ultra 7 155H",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 22,
            "base_clock_GHz": 1.4,
            "boost_clock_GHz": 4.8,
            "tdp_w": 28,
            "socket": "BGA1964"
        },
        "price_inr": 32000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.y9DJEW12A9JW8uCatc3q0gHaDt?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_7_165u",
        "category": "cpu",
        "name": "Intel Core Ultra 7 165U",
        "brand": "Intel",
        "specs": {
            "cores": 12,
            "threads": 14,
            "base_clock_GHz": 1.7,
            "boost_clock_GHz": 4.8,
            "tdp_w": 15,
            "socket": "BGA1964"
        },
        "price_inr": 30000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.tYbWXyXIjjTemHAFjo5m2wAAAA?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_7_265",
        "category": "cpu",
        "name": "Intel Core Ultra 7 265",
        "brand": "Intel",
        "specs": {
            "cores": 20,
            "threads": 20,
            "base_clock_GHz": 3.9,
            "boost_clock_GHz": 5.4,
            "tdp_w": 65,
            "socket": "LGA1851"
        },
        "price_inr": 38000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.tYbWXyXIjjTemHAFjo5m2wAAAA?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B860",
                "H810",
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_7_265k",
        "category": "cpu",
        "name": "Intel Core Ultra 7 265K",
        "brand": "Intel",
        "specs": {
            "cores": 20,
            "threads": 20,
            "base_clock_GHz": 3.9,
            "boost_clock_GHz": 5.5,
            "tdp_w": 125,
            "socket": "LGA1851"
        },
        "price_inr": 42000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.tYbWXyXIjjTemHAFjo5m2wAAAA?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_9_185h",
        "category": "cpu",
        "name": "Intel Core Ultra 9 185H",
        "brand": "Intel",
        "specs": {
            "cores": 16,
            "threads": 22,
            "base_clock_GHz": 2.1,
            "boost_clock_GHz": 5.1,
            "tdp_w": 45,
            "socket": "BGA1964"
        },
        "price_inr": 40000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.M1lQAoqMpl41nLSnilvPvQHaDk?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [],
            "max_ram_speed_mhz": 5600
        }
    },
    {
        "_id": "cpu_intel_core_ultra_9_285",
        "category": "cpu",
        "name": "Intel Core Ultra 9 285",
        "brand": "Intel",
        "specs": {
            "cores": 24,
            "threads": 24,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 5.7,
            "tdp_w": 65,
            "socket": "LGA1851"
        },
        "price_inr": 52000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.MQ6GNw6asr_ct9R7P6410gHaHH?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "B860",
                "H810",
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_9_285k",
        "category": "cpu",
        "name": "Intel Core Ultra 9 285K",
        "brand": "Intel",
        "specs": {
            "cores": 24,
            "threads": 24,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 5.7,
            "tdp_w": 125,
            "socket": "LGA1851"
        },
        "price_inr": 58000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.MQ6GNw6asr_ct9R7P6410gHaHH?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "cpu_intel_core_ultra_9_285kf",
        "category": "cpu",
        "name": "Intel Core Ultra 9 285KF",
        "brand": "Intel",
        "specs": {
            "cores": 24,
            "threads": 24,
            "base_clock_GHz": 3.7,
            "boost_clock_GHz": 5.7,
            "tdp_w": 125,
            "socket": "LGA1851"
        },
        "price_inr": 56000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.MQ6GNw6asr_ct9R7P6410gHaHH?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z",
        "compatibility": {
            "min_mobo_chipset": [
                "Z890"
            ],
            "max_ram_speed_mhz": 6400
        }
    },
    {
        "_id": "gpu_nvidia_rtx_3050",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3050 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 130
        },
        "price_inr": 22000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDsIXEPYal5eV1pNGbPlqSy5shfemdh_5i_oJ-RmYUBuqvY02vzOowkovVe_FZNTlSghBh5fwBEbNNWPm-EBEd8D2xUgNpAcQQoDwVrSKUAMm5wZCtuF5M",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1660_super",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1660 Super 6GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 6,
            "tdp_w": 125
        },
        "price_inr": 15000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfvB8rruWwm-w8-J8EEWMfx4WuNLJgh-JWLiRhkTv3y3uz1gEucsEia4OcEfDF-sf6ZGhAUBU8O4m9ydqX_VvbBdq6eDVONmpRcUx-t4dO4Rc84ulcEzI_ZQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gt_710",
        "category": "gpu",
        "name": "NVIDIA GeForce GT 710 2GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 2,
            "tdp_w": 19
        },
        "price_inr": 2850,
        "image_url": "https://www.tpstech.in/cdn/shop/products/01_d68a2a3f-c546-4a3c-a9c1-fcba1d9da1be.jpg?v=1612185876",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3090",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3090 24GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 24,
            "tdp_w": 350
        },
        "price_inr": 105000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRyhb9BXLrHLVXY0xAV4hHb3yDxTNHZV2wxm1IibHHjpnconfaKWsv7LPhnLEyRQnzDi77fLLXo7oEque58LPyjlSapiXm8YoGLZsCFz3s",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4080_super",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4080 Super 16GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 320
        },
        "price_inr": 175000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTBH3CuZbBg2clBO8uABQ3Z6fLwsGCADo6vc_Q3pEJd6wfrg-gQGoeBU-DEVg07lwfuFOyQuHISQ31YJ4aLw0vfdI9enk4vAdlGJbL54Wy_Znn-pjGcV-YUQg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_quadro_t1000",
        "category": "gpu",
        "name": "NVIDIA Quadro T1000 (professional)",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 50
        },
        "price_inr": 30000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTxSxXFynGxQeESgx9r7msKx6l9sZQMXAv1gVTppnbpjHVG4-0Kpb1i7bbTKwJ_ZeWJmR8g8Gw7qwBdXH3St6wGMl2eo-Cu25YnK-ehSYXTZA-8fldJ7MH18A",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6400",
        "category": "gpu",
        "name": "AMD Radeon RX 6400 4GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 53
        },
        "price_inr": 11500,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.hYsdZVTWNtWwRCeol0uyEQHaFj?pid=Api&P=0&h=220",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6500_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 6500 XT 4GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 107
        },
        "price_inr": 14500,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.nb-f5NRfTOKhoZG74ceVTwHaD6?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6600_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 6600 XT 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 160
        },
        "price_inr": 26000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.AVBIAdGbYQOV3E8j5CuTAAHaII?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6650_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 6650 XT 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 180
        },
        "price_inr": 28000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.o3AmfNHOIBHHiABy94BhtwHaG2?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7400",
        "category": "gpu",
        "name": "AMD Radeon RX 7400 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 100
        },
        "price_inr": 17500,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.zaSYUuJ9PbGcM0uNUVsT8AHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7600_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 7600 XT 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 190
        },
        "price_inr": 33000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.2tzUl_wzKUFeB-mBq9C5kAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7700_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 7700 XT 12GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 245
        },
        "price_inr": 37000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.Dvz2em25AhLO-fFe1vJmcgHaHN?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7800_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 7800 XT 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 263
        },
        "price_inr": 46000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.0jAsjxLpke3FToGsbBDP9gHaHy?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7900_gre",
        "category": "gpu",
        "name": "AMD Radeon RX 7900 GRE 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 260
        },
        "price_inr": 52000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.LLHGTDUGaL3y1OYmuBs93gHaDt?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7900_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 7900 XT 20GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 20,
            "tdp_w": 300
        },
        "price_inr": 69000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.04e_CW73tlnjWBLsrcyfcwHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7900_xtx",
        "category": "gpu",
        "name": "AMD Radeon RX 7900 XTX 24GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 24,
            "tdp_w": 355
        },
        "price_inr": 90000,
        "image_url": "https://images.search.yahoo.com/search/images;_ylt=Awrx_VFKAiVqcQIAvGWJzbkF;_ylu=Y29sbwNzZzMEcG9zAzcEdnRpZAMEc2VjA3Ny?fr=mcafee&p=gpu_amd_rx_7900_xtx&imgurl=https%3A%2F%2Fwww.kitguru.net%2Fwp-content%2Fuploads%2F2022%2F11%2F7900-xtx.jpg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_9060_8gb",
        "category": "gpu",
        "name": "AMD Radeon RX 9060 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 136
        },
        "price_inr": 22000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.qFFjLKGfwtlHtlr4c5CwuwHaD-?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_9060_xt_8gb",
        "category": "gpu",
        "name": "AMD Radeon RX 9060 XT 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 150
        },
        "price_inr": 27000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.VcMOiM_-1cSBSkGUE-DTGwHaD_?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_9060_xt_16gb",
        "category": "gpu",
        "name": "AMD Radeon RX 9060 XT 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 182
        },
        "price_inr": 32000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.HIAFXmxhsDzu6viy55lQQQHaD2?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_9070",
        "category": "gpu",
        "name": "AMD Radeon RX 9070 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 220
        },
        "price_inr": 50000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.--e8ocoH2s_afE5iHGdRYQHaGT?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_9070_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 9070 XT 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 304
        },
        "price_inr": 70000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.7XpAm9uF_VohHgmZuanYvgHaHu?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_pro_w7800",
        "category": "gpu",
        "name": "AMD Radeon PRO W7800 32GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 32,
            "tdp_w": 260
        },
        "price_inr": 220000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.jzWv1knuLUyYMOqGv-cpUwHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_pro_w7900",
        "category": "gpu",
        "name": "AMD Radeon PRO W7900 48GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 48,
            "tdp_w": 295
        },
        "price_inr": 320000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.qwKUFmB7bJFWOkXfasVyDQHaD9?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_5500_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 5500 XT 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 130
        },
        "price_inr": 16000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.wKzDE3pvm-QSHrCASvG5CwHaHi?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_5600_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 5600 XT 6GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 6,
            "tdp_w": 150
        },
        "price_inr": 19000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.ErAsZ4jHo8tcJtX7qJ8pugHaHL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_5700",
        "category": "gpu",
        "name": "AMD Radeon RX 5700 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 180
        },
        "price_inr": 21000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.VpY0BNcx3gE0P-tPn2a5RAHaFb?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_5700_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 5700 XT 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 225
        },
        "price_inr": 24000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.E4YtA7nObcUFp88v538lIgHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6700_10gb",
        "category": "gpu",
        "name": "AMD Radeon RX 6700 10GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 10,
            "tdp_w": 175
        },
        "price_inr": 26000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.g1jqzqgFw0hOjJ3zybvTvQHaEW?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6700_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 6700 XT 12GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 230
        },
        "price_inr": 31000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.8zMkFuPUdUlqx0mLNqmdDQHaHD?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6750_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 6750 XT 12GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 250
        },
        "price_inr": 34000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.U42hMtPj80njxL6P7_djRAHaHS?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6800",
        "category": "gpu",
        "name": "AMD Radeon RX 6800 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 250
        },
        "price_inr": 38000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.ESbSgub2OIg-Nh1RjHlFGAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6800_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 6800 XT 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 300
        },
        "price_inr": 44000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.7NYVaviCEWMrILiOI1us2wHaGx?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6900_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 6900 XT 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 300
        },
        "price_inr": 58000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.PgLHi1R_mbhs76xNCamoIwHaGL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6950_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 6950 XT 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 335
        },
        "price_inr": 64000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.fe8dZup7skXvRWs4J-DhagHaGX?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7600_xt_amd",
        "category": "gpu",
        "name": "AMD Radeon RX 7600 XT 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 165
        },
        "price_inr": 28000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.2tzUl_wzKUFeB-mBq9C5kAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7700",
        "category": "gpu",
        "name": "AMD Radeon RX 7700 12GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 200
        },
        "price_inr": 35000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.R6DIFwbfGQQoray6HOVKZwHaGl?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7800",
        "category": "gpu",
        "name": "AMD Radeon RX 7800 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 240
        },
        "price_inr": 43000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.OxeUoim9qI4p6nISA-EPbwHaFk?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_8600",
        "category": "gpu",
        "name": "AMD Radeon RX 8600 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 130
        },
        "price_inr": 20000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP._LLDPgRb_QwxTTcMSqV3zQHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_8600_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 8600 XT 12GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 160
        },
        "price_inr": 26000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.H8HAvV7-H7PkasrpC2F8cgHaFu?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_8700",
        "category": "gpu",
        "name": "AMD Radeon RX 8700 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 200
        },
        "price_inr": 38000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.OKaS67INT_ECgbWx-qtpCgHaEc?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_8700_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 8700 XT 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 250
        },
        "price_inr": 48000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.BS71s9g08aJZZlCSpe4tlAHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_8800",
        "category": "gpu",
        "name": "AMD Radeon RX 8800 20GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 20,
            "tdp_w": 260
        },
        "price_inr": 60000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.bq70xicz9ky_JFWN1Pz3jAHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_8800_xt",
        "category": "gpu",
        "name": "AMD Radeon RX 8800 XT 24GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 24,
            "tdp_w": 300
        },
        "price_inr": 75000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.JFxvUql-GTra1y1veWAjtAHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_8900",
        "category": "gpu",
        "name": "AMD Radeon RX 8900 24GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 24,
            "tdp_w": 320
        },
        "price_inr": 95000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.1cDKiyonFnblEMTYYnDz_QHaEI?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_8900_xtx",
        "category": "gpu",
        "name": "AMD Radeon RX 8900 XTX 32GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 32,
            "tdp_w": 400
        },
        "price_inr": 130000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.AWhBqHr841qkwdkCizY7GwHaEI?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_pro_v710",
        "category": "gpu",
        "name": "AMD Radeon Pro V710 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 150
        },
        "price_inr": 55000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.nTQMyLhQmlt4V0NUYQTN3gHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_pro_w5500",
        "category": "gpu",
        "name": "AMD Radeon Pro W5500 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 125
        },
        "price_inr": 27000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.jBz8pqkJeoCpwUcXCKO2TgHaEy?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_pro_w6600",
        "category": "gpu",
        "name": "AMD Radeon Pro W6600 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 150
        },
        "price_inr": 38000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.lxqqZ_bUsst0Z7ghjnOxjAHaEQ?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_pro_w6800",
        "category": "gpu",
        "name": "AMD Radeon Pro W6800 32GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 32,
            "tdp_w": 250
        },
        "price_inr": 185000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.EBQGzR77SanWQVtinAyH8gHaFj?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_pro_w7700",
        "category": "gpu",
        "name": "AMD Radeon Pro W7700 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 190
        },
        "price_inr": 65000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.7ibc9TNI0OlBuSxd4WPf9AHaDo?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_pro_w7900_dual",
        "category": "gpu",
        "name": "AMD Radeon Pro W7900 Dual Slot 48GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 48,
            "tdp_w": 295
        },
        "price_inr": 340000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.9Dk9eizQOkDkH-BASOqr0wHaEO?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_ai_pro_r9700",
        "category": "gpu",
        "name": "AMD Radeon AI Pro R9700 32GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 32,
            "tdp_w": 250
        },
        "price_inr": 95000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.An9lIz4wbQqCjL7Vtfa_xQHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6300",
        "category": "gpu",
        "name": "AMD Radeon RX 6300 2GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 2,
            "tdp_w": 32
        },
        "price_inr": 7500,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.17cobB6TZOR9c4rxfj1-9QHaDM?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6400_low_profile",
        "category": "gpu",
        "name": "AMD Radeon RX 6400 Low Profile 4GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 53
        },
        "price_inr": 12000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.wzZ-Phu0cA4v7vK6cAPVZAHaGL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6500_xt_dual_fan",
        "category": "gpu",
        "name": "AMD Radeon RX 6500 XT Dual Fan 4GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 107
        },
        "price_inr": 15000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.L3uah1Ntca30CBLUcS-lQAHaG4?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6600_challenge",
        "category": "gpu",
        "name": "AMD Radeon RX 6600 Challenger 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 132
        },
        "price_inr": 19500,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.LikOVw_pCdqcexGaDqk6uAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_6650_xt_oc",
        "category": "gpu",
        "name": "AMD Radeon RX 6650 XT OC 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 180
        },
        "price_inr": 29000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.mTkCNiM6lS-2VHVjfDuAyQHaEo?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7600_gaming",
        "category": "gpu",
        "name": "AMD Radeon RX 7600 Gaming 8GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 165
        },
        "price_inr": 27500,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.iSJ60hXNvZKqPIpnWCDb4gHaHx?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7700_xt_oc",
        "category": "gpu",
        "name": "AMD Radeon RX 7700 XT OC 12GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 245
        },
        "price_inr": 38000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.IfNnVjEAyctI8BV0Nba3twHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7800_xt_gaming",
        "category": "gpu",
        "name": "AMD Radeon RX 7800 XT Gaming 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 263
        },
        "price_inr": 47000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.2TFLochHO1lRqaj8AYjHbQHaGL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7900_gre_oc",
        "category": "gpu",
        "name": "AMD Radeon RX 7900 GRE OC 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 260
        },
        "price_inr": 53000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.SZl1WXYxCIJhzCMqZ3nAXgHaGL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7900_xt_magnetic_air",
        "category": "gpu",
        "name": "AMD Radeon RX 7900 XT Magnetic Air 20GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 20,
            "tdp_w": 300
        },
        "price_inr": 71000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.FF6jQEiJ0aBmY1FoHmHWBAHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_7900_xtx_phantom",
        "category": "gpu",
        "name": "AMD Radeon RX 7900 XTX Phantom 24GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 24,
            "tdp_w": 355
        },
        "price_inr": 92000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.35rP9lFYfETijYjVr1vKRgHaGL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_9060_xt_hellhound",
        "category": "gpu",
        "name": "AMD Radeon RX 9060 XT Hellhound 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 182
        },
        "price_inr": 33000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.sq5-yTxGqUYVpEjJrrD9fQHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_amd_rx_9070_xt_red_devil",
        "category": "gpu",
        "name": "AMD Radeon RX 9070 XT Red Devil 16GB",
        "brand": "AMD",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 340
        },
        "price_inr": 75000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.X4OpLsG6tnR8GE4j0hwxxAHaFb?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gt_1030",
        "category": "gpu",
        "name": "NVIDIA GeForce GT 1030 2GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 2,
            "tdp_w": 30
        },
        "price_inr": 5500,
        "image_url": "https://images.search.yahoo.com/search/images;_ylt=Awr1RVxp_CRqkwIAJgCJzbkF;_ylu=Y29sbwNzZzMEcG9zAzQEdnRpZAMEc2VjA3Ny?fr=mcafee&p=gpu_nvidia_gt_1030&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71r6Yid8r0L._AC_SL1500_.jpg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1050_ti",
        "category": "gpu",
        "name": "Colorful NVIDIA GeForce GTX 1050 Ti 4GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 75
        },
        "price_inr": 7999,
        "image_url": "https://images.search.yahoo.com/search/images;_ylt=Awr1RVyE_CRqcQIAehuJzbkF;_ylu=Y29sbwNzZzMEcG9zAzIEdnRpZAMEc2VjA3Ny?fr=mcafee&p=gpu_nvidia_gtx_1050_ti&imgurl=https%3A%2F%2Fasset.msi.com%2Fresize%2Fimage%2Fglobal%2Fproduct%2Fproduct_7_20180411113751_5acd830f900d9.png62405b38c58fe0f07fcef2367d8a9ba1%2F1024.png",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1630",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1630 4GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 75
        },
        "price_inr": 9500,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.otRiUtxRKKO9eo7739pv8wHaEt?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1650",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1650 4GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 75
        },
        "price_inr": 12500,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.Wn2FTGkpXrJghzJOikY-ywHaF7?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1650_super",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1650 Super 4GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 100
        },
        "price_inr": 13500,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.mMxTrNFZntvC49UlFWPZ2gHaHL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1660",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1660 6GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 6,
            "tdp_w": 120
        },
        "price_inr": 14500,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.8VNISrLV9JQzcYczhcdpVAHaEL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1660_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1660 Ti 6GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 6,
            "tdp_w": 120
        },
        "price_inr": 18500,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP._Kr9Np0U62NFUjKZ4ct_BAHaF7?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2050",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 2050 4GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 45
        },
        "price_inr": 10000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.LN2odJ8mnfLq89f-wcpgVgHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3050_6gb",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3050 6GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 6,
            "tdp_w": 70
        },
        "price_inr": 15900,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.uhg0wBpiKgvXHSRA8YT5NAHaHm?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2060_6gb",
        "category": "gpu",
        "name": "ZOTAC NVIDIA GeForce RTX 2060 6GB GDDR6",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 6,
            "tdp_w": 160
        },
        "price_inr": 29500,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.pGZQlxkvRLY_O3zHezlo_AHaHb?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2060_super",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 2060 Super 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 175
        },
        "price_inr": 31000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.9wuh5Aq1wxr5ncGAF3ZfXQHaFT?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1070",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1070 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 150
        },
        "price_inr": 13000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.-BtAO2Uvyg1tGFdYsbX4kgHaF7?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1060_6gb",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1060 6GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 6,
            "tdp_w": 120
        },
        "price_inr": 9500,
        "image_url": "",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1050_3gb",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1050 3GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 3,
            "tdp_w": 75
        },
        "price_inr": 7000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.svU0zwN-wifje9qjtabZdAHaE8?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1030_ddr4",
        "category": "gpu",
        "name": "NVIDIA GeForce GT 1030 2GB DDR4",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 2,
            "tdp_w": 20
        },
        "price_inr": 4500,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.tMOiHfPYhQXTy-SZ64nf1wHaF1?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gt_1010",
        "category": "gpu",
        "name": "NVIDIA GeForce GT 1010 2GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 2,
            "tdp_w": 30
        },
        "price_inr": 3500,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.dsCIsbpNUHCeaTKV93qmUwHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_960",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 960 2GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 2,
            "tdp_w": 120
        },
        "price_inr": 5500,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.USyaOfiWPo7h0QJHdSprpAHaET?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3060_12gb",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3060 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 170
        },
        "price_inr": 29500,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.G0h_uJZxoHpytyFxyVoq_gHaG0?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3060_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3060 Ti 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 200
        },
        "price_inr": 34000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.o05RpUnaJEX5qqILW0LbmAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4060_8gb",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4060 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 115
        },
        "price_inr": 27999,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.YrepEX6V1OLWzYqRzTwHQAHaHL?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4060_ti_8gb",
        "category": "gpu",
        "name": "Gigabyte NVIDIA GeForce RTX 4060 Ti EAGLE OC 8G",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 160
        },
        "price_inr": 40999,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.JnO2oh2j_dGTvl-qMxclswHaGd?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4060_ti_16gb",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4060 Ti 16GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 165
        },
        "price_inr": 46000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.K4EIKFHzHex04gXobiNrigHaH5?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3060_8gb",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3060 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 170
        },
        "price_inr": 27000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.eEJFcsweXrabItbfnZLbSwHaFj?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2070_super",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 2070 Super 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 215
        },
        "price_inr": 32000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.ywbl0YuY23WHSO7C98aIaAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2070",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 2070 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 175
        },
        "price_inr": 30000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.D4w2qVfzUAIIJlSxeY3gAAHaF2?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2080_super",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 2080 Super 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 250
        },
        "price_inr": 45000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.yediM67r_F19C8ilLIvFoQHaGP?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3070",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3070 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 220
        },
        "price_inr": 43000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.xELLcs3h4jn2M6FuAwpFeAHaFS?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3070_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3070 Ti 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 290
        },
        "price_inr": 50000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.l6pKS-FTJgwRmvID7wBIaQHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3080_10gb",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3080 10GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 10,
            "tdp_w": 320
        },
        "price_inr": 55000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.ULD8d_ZJBKmUpEU7SegebgHaHI?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3080_12gb",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3080 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 350
        },
        "price_inr": 62000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.dFYi8ff8DcleUHp-RCK8LAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3080_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3080 Ti 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 350
        },
        "price_inr": 75000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.Ue0s0LZqnTsck49hVh1XWAHaEv?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4070",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4070 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 200
        },
        "price_inr": 55000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.NpXMxXNqVUi_EONbtneVnAHaHc?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4070_super",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4070 Super 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 220
        },
        "price_inr": 62000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.DoxfngtmXdj6dK9NQiGz-AHaEM?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4070_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4070 Ti 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 285
        },
        "price_inr": 73000,
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.gMzpJ2bB-SyJ_MX3yQCU1AHaEK?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4070_ti_super",
        "category": "gpu",
        "name": "Gigabyte NVIDIA GeForce RTX 4070 Ti Super Aero OC 16G",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 285
        },
        "price_inr": 93999,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.e7gcTsXaa894J1AL8-nCWAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2080_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 2080 Ti 11GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 11,
            "tdp_w": 250
        },
        "price_inr": 60000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.2Cg7awT0Vz2xUv0lHsJcQQHaG4?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3090_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3090 Ti 24GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 24,
            "tdp_w": 450
        },
        "price_inr": 130000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.OB2j8IkRNXZzCtn_47I4wwHaFA?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4080",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4080 16GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 320
        },
        "price_inr": 115000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.cPKCrv5j4wGhKNxKsZYuLQHaGm?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_4090",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 4090 24GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 24,
            "tdp_w": 450
        },
        "price_inr": 145000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.-I3vwgpV5locKJGmXPi3WgHaF7?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_a4000",
        "category": "gpu",
        "name": "NVIDIA RTX A4000 16GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 16,
            "tdp_w": 140
        },
        "price_inr": 75000,
        "image_url": "",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_5000_ada",
        "category": "gpu",
        "name": "NVIDIA RTX 5000 Ada Generation 32GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 32,
            "tdp_w": 250
        },
        "price_inr": 285000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.gxgt9ZUVouBm2gW5uxjhrAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_titan_rtx",
        "category": "gpu",
        "name": "NVIDIA TITAN RTX 24GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 24,
            "tdp_w": 280
        },
        "price_inr": 185000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.cjCdw_P3lyB3UNjqa1KBagHaDa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_6000_ada",
        "category": "gpu",
        "name": "NVIDIA RTX 6000 Ada Generation 48GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 48,
            "tdp_w": 300
        },
        "price_inr": 550000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.J8jw7MQkgOfImGhSRDkRhgHaFB?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3060_ti_gddr6x",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3060 Ti GDDR6X 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 225
        },
        "price_inr": 34000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.BnPrhoZ49KIQpxbhX5uB0wHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_2060_12gb",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 2060 12GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 12,
            "tdp_w": 185
        },
        "price_inr": 28000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.ovLVpewoCwN4ZwF5E0ZgBAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1080_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1080 Ti 11GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 11,
            "tdp_w": 250
        },
        "price_inr": 25000,
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.wJFfmGj_IoXrw8oKL0GHEgHaGa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1080",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1080 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 180
        },
        "price_inr": 19500,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.Y8v70IsnoboU7yLsmcK3SAHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1070_ti",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1070 Ti 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 180
        },
        "price_inr": 16500,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.fi01gMfcfMFWQ9YHWsWT0QHaD5?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_rtx_3050_oem",
        "category": "gpu",
        "name": "NVIDIA GeForce RTX 3050 OEM 8GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 8,
            "tdp_w": 130
        },
        "price_inr": 20000,
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.ADhqUJFcGpwQuKhldJs7FgHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "gpu_nvidia_gtx_1650_d6",
        "category": "gpu",
        "name": "NVIDIA GeForce GTX 1650 D6 4GB",
        "brand": "Nvidia",
        "specs": {
            "vram_gb": 4,
            "tdp_w": 75
        },
        "price_inr": 13000,
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.H3r5kr06qSEWv7_IwWycqQHaHa?pid=Api&h=220&P=0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_corsair_vengeance_16gb_3200",
        "category": "ram",
        "name": "Corsair Vengeance LPX 16GB (2x8) DDR4 3200MHz",
        "brand": "Corsair",
        "specs": {
            "capacity_gb": 16,
            "modules": 2,
            "type": "DDR4",
            "speed_mhz": 3200
        },
        "price_inr": 4200,
        "image_url": "https://systemsettings.in/wp-content/uploads/2024/10/51Gs2sm696L._SX679_-1-scaled.jpg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_gskill_ripjaws_16gb_3600",
        "category": "ram",
        "name": "G.Skill Ripjaws V 16GB (2x8) DDR4 3600MHz",
        "brand": "G.Skill",
        "specs": {
            "capacity_gb": 16,
            "modules": 2,
            "type": "DDR4",
            "speed_mhz": 3600
        },
        "price_inr": 4700,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8vyItBqvFQmj3BGKAawZvvz1F_ovECtHV7aPhlchG5utYeHue1-VTZcdqU-7Z8Ozsld1cYSWi-GlOmiHnvbVMci1deZJWyoqTKBvoMN1DmYBJdHq8qDMcUw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_kingston_8gb_2666",
        "category": "ram",
        "name": "Kingston ValueRAM 8GB DDR4 2666MHz",
        "brand": "Kingston",
        "specs": {
            "capacity_gb": 8,
            "modules": 1,
            "type": "DDR4",
            "speed_mhz": 2666
        },
        "price_inr": 1600,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfYdZQfvSYLLgQaGYeKNGgUTr7ee1c2bRLICeWaTgDCMKyeyVasm1lHLA-NuPLrQsi0gkvOqiJfcnxgeNRylxMHhiY-8O1muxyxpAXbceTwN5I9na2zPFgvA",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_crucial_ballistix_32gb_3200",
        "category": "ram",
        "name": "Crucial Ballistix 32GB (2x16) DDR4 3200MHz",
        "brand": "Crucial",
        "specs": {
            "capacity_gb": 32,
            "modules": 2,
            "type": "DDR4",
            "speed_mhz": 3200
        },
        "price_inr": 8800,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSm8fhMeugXF0ghHSPt3RRcXXIHvYnd_qktGFx3fVEZognqfq6BfUEGZZs5j9NKhfxcU2jfkOOsjO8ZUpm1uzj2_by6D1fXyqzNAZ0wRkZf0yNzaeRP567hQbk",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_xpg_dominator_16gb_3600",
        "category": "ram",
        "name": "XPG Lancer 16GB (2x8) DDR5 5600MHz",
        "brand": "XPG",
        "specs": {
            "capacity_gb": 16,
            "modules": 2,
            "type": "DDR5",
            "speed_mhz": 5600
        },
        "price_inr": 9500,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThon2Zpsx2UY3e-ddXr8V-WQBynMA61TOx8x3Fri5gAcCN7fKliVwr2wO740GeFTovh3iJ2iR6bdSaKRvSU2r-DL5v8D0LklPx5wyMtthUvSXeGWKiuanp",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_corsair_ddr5_32gb_5200",
        "category": "ram",
        "name": "Corsair Vengeance DDR5 32GB (2x16) 5200MHz",
        "brand": "Corsair",
        "specs": {
            "capacity_gb": 32,
            "modules": 2,
            "type": "DDR5",
            "speed_mhz": 5200
        },
        "price_inr": 18000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTA0qHm1sWytVwOcUQyMZE-SQoYpeADbDi7KdXCOuRicqXHnecsiSxheSfQNaeedzbpHZFkwH3gutPbnbYODNZBnmdzJiM8dMkMD9HK0ZQacv_u1ZNbB7kQ0WU",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_gskill_trident_32gb_6000",
        "category": "ram",
        "name": "G.Skill Trident Z5 RGB 32GB (2x16) DDR5 6000MHz",
        "brand": "G.Skill",
        "specs": {
            "capacity_gb": 32,
            "modules": 2,
            "type": "DDR5",
            "speed_mhz": 6000
        },
        "price_inr": 24000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzqhy7X65vOMcAUeQLLjXZYT-yvH1Vcuebtiiu88mFUrsSg_F_VWW_glSpzkkEUQlYxcyzLb21hMBeMyM5Ake6IrD7ygyJQIm-aaClnmjFva1-sYCJRECtGg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_adata_8gb_3200",
        "category": "ram",
        "name": "ADATA XPG 8GB DDR4 3200MHz",
        "brand": "ADATA",
        "specs": {
            "capacity_gb": 8,
            "modules": 1,
            "type": "DDR4",
            "speed_mhz": 3200
        },
        "price_inr": 1700,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7z32FP38Asta9zrmImz1pCc9WDBe5b0Lfo9C1eXAow5cHvgsiAZ8J3F-3ae4vJ1bDsfhKsxEncMm0sziRaG-jBp0QsM-zdhnnyCWCgBA3DROZpCkp6qpU",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_corsair_vengeance_8gb_3000",
        "category": "ram",
        "name": "Corsair Vengeance 8GB DDR4 3000MHz",
        "brand": "Corsair",
        "specs": {
            "capacity_gb": 8,
            "modules": 1,
            "type": "DDR4",
            "speed_mhz": 3000
        },
        "price_inr": 1800,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhPVtBcG-4z7vG53yhM7ndEveEEddVg7RGTK5HZrrVX4J3MbZ7MhKCXNzs7IglViOnzifxwjFjxGCbmV8DOhKP5LLG32jBshJaQ5pdWUIfAiV1d24_u6Wjmg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_teamgroup_tforce_16gb_3600",
        "category": "ram",
        "name": "TeamGroup T-Force Vulcan Z 16GB (2x8) DDR4 3600MHz",
        "brand": "TeamGroup",
        "specs": {
            "capacity_gb": 16,
            "modules": 2,
            "type": "DDR4",
            "speed_mhz": 3600
        },
        "price_inr": 4300,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDROvxVZSxMJ7fuoPQ2ZOxuc6N4dn8qM3H4c9YB6Ztqke0CF50gU-yzUgUaUIoPzkJZf1Kwn3xYUhhYT8RABeMsOkjAHNmS_Z4RkKvtcyvmzQUPcXh24VXFQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_patriot_viper_32gb_3600",
        "category": "ram",
        "name": "Patriot Viper Steel 32GB (2x16) DDR4 3600MHz",
        "brand": "Patriot",
        "specs": {
            "capacity_gb": 32,
            "modules": 2,
            "type": "DDR4",
            "speed_mhz": 3600
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMLn9-3vi42-AUA-8-Tf3v8G64C0sUypYMqY_ZXQtEozNhJ6roNvizcgkkFzRGRQkp7D0PFXdLfz_-IA4_aFg78sXX8AlpEFvWGCB0b81gr3UjfwKIYoqahQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_kingston_hyperx_16gb_3200",
        "category": "ram",
        "name": "Kingston HyperX Fury 16GB (2x8) DDR4 3200MHz",
        "brand": "Kingston",
        "specs": {
            "capacity_gb": 16,
            "modules": 2,
            "type": "DDR4",
            "speed_mhz": 3200
        },
        "price_inr": 4300,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcMQ_RY7lXxA43HFLCjFv4WHSFOf9_gNuFye2krmjFSqQzH-AXT77aUWM670SM5QXixw41FtMevjvrHbAJjBUX6bOF8_K6mMnSYP0Sjvc",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_samsung_32gb_ecc",
        "category": "ram",
        "name": "Samsung 32GB DDR4 ECC (server/workstation)",
        "brand": "Samsung",
        "specs": {
            "capacity_gb": 32,
            "modules": 1,
            "type": "DDR4-ECC",
            "speed_mhz": 2666
        },
        "price_inr": 15000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUMb9L6wFgKRTsjnJrn1VDK4Qm5XDLvvAYcRuCN3b7gS7DA1c7OIz1PoROuEjjRUqwvmBnF6-_u4chmyLH8ONLAUp2m1bk4_vLEQLy5w",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_corsair_16gb_ddr5_5200",
        "category": "ram",
        "name": "Corsair Dominator Platinum DDR5 16GB (1x16) 5200MHz",
        "brand": "Corsair",
        "specs": {
            "capacity_gb": 16,
            "modules": 1,
            "type": "DDR5",
            "speed_mhz": 5200
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAcUMBXZMrdMB3ft7A_InTXh0WcwED2t9qrtXazo3HPNsY4yjgf6HxxDaSzuTj0XiEoQQcRl2-03WlFPeGypaHngumV4o2KkqJHC7kZ9zyCwW-epabbX0koA",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_gskill_trident_16gb_3600",
        "category": "ram",
        "name": "G.Skill Trident Z Neo 16GB (2x8) DDR4 3600MHz",
        "brand": "G.Skill",
        "specs": {
            "capacity_gb": 16,
            "modules": 2,
            "type": "DDR4",
            "speed_mhz": 3600
        },
        "price_inr": 4800,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6GWrZjiNEmrwW2psfRYmBIvFdWsd1aMroArxuPFSMXvaQ9jtIcAJ2woY-sThyrdJ4YStdeHQ6D1xbWZJoWny6BiB7_24ZQjTOpeNBtZY",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "ram_adata_xpg_ddr5_32gb_5600",
        "category": "ram",
        "name": "ADATA XPG Lancer DDR5 32GB (2x16) 5600MHz",
        "brand": "ADATA",
        "specs": {
            "capacity_gb": 32,
            "modules": 2,
            "type": "DDR5",
            "speed_mhz": 5600
        },
        "price_inr": 17000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhxduM6a0lbeGk8Vdc9Gj4tceX6KMGr88D6tn4DJre0D8b30yxNAHY31mBdZIsvFa3zsp5OANwAI08jW6ax28qFzXNS5YWgn41PaBh7I7cMG0MJXQKBvgIUQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_msi_b550_tomahawk",
        "category": "mobo",
        "name": "MSI B550 Tomahawk",
        "brand": "MSI",
        "specs": {
            "socket": "AM4",
            "form_factor": "ATX",
            "chipset": "B550",
            "max_ram_speed_mhz": 4866,
            "m2_slots": 2
        },
        "price_inr": 15000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR406SHlS_Sgdym7VSZvdPtUpg1svFjoWHkEoJNClgRcUv_zQOhl8rph2V5Pn540CDfkgwQpcH4rq8ln6e4Z4tS924heFWwZWqimuGfqVvPPVB5uee_pLcsnw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_gigabyte_b450_ds3h",
        "category": "mobo",
        "name": "Gigabyte B450 DS3H",
        "brand": "Gigabyte",
        "specs": {
            "socket": "AM4",
            "form_factor": "ATX",
            "chipset": "B450",
            "max_ram_speed_mhz": 3200,
            "m2_slots": 1
        },
        "price_inr": 6500,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2fOzQNQOaTcfvbQZPOR18idmFDmfLY9YSAYOvCM2yzHmYMIqh_H3psw1wa_B08XFZNWGjVc7A800Sla3d1K_SU7-pbBM8F75zLrPgVMZvwks2VCwUk1k4",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_asus_tuf_b660m",
        "category": "mobo",
        "name": "ASUS TUF Gaming B660M-PLUS",
        "brand": "ASUS",
        "specs": {
            "socket": "LGA1700",
            "form_factor": "mATX",
            "chipset": "B660",
            "max_ram_speed_mhz": 5200,
            "m2_slots": 2
        },
        "price_inr": 12000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ7a3uqFRcLBrKeFB-31e4R58PdK56pssZqi5ew1HrCePhZK9Hopn4LuV_4wPAoh55f7lCq7LbnEKxs1cOdEhDJH6iQ6OzOCPCsftfzkqpImTOVixILUH_Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_asus_rog_strix_x570e",
        "category": "mobo",
        "name": "ASUS ROG Strix X570-E Gaming",
        "brand": "ASUS",
        "specs": {
            "socket": "AM4",
            "form_factor": "ATX",
            "chipset": "X570",
            "max_ram_speed_mhz": 5100,
            "m2_slots": 2
        },
        "price_inr": 26000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDCd57qaRYSrIR7TjrTYi_lVhAIU2oFnD9PXV7iRIaNguY96w-Z9IGBj3bKyEmyfKk441cwegY87Q-NIHg7fRbiJ1Q6oFmO3pJHSHoMfeyPxGxSgVJVm7PtQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_msi_z690_a_pro",
        "category": "mobo",
        "name": "MSI PRO Z690-A",
        "brand": "MSI",
        "specs": {
            "socket": "LGA1700",
            "form_factor": "ATX",
            "chipset": "Z690",
            "max_ram_speed_mhz": 5600,
            "m2_slots": 3
        },
        "price_inr": 21000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp7Hd6NsFSqmMwTq17iTyppuadFg-X6vBGyZMESWl4ise-XlZK6vYcXKJq-0nwUMUGlMxMotVUGa7Wmlivx1qFsR22DRwPmWqNrrO1Pb3dUK8v53efko_VKLc",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_gigabyte_x570_aorus_elite",
        "category": "mobo",
        "name": "Gigabyte X570 AORUS Elite",
        "brand": "Gigabyte",
        "specs": {
            "socket": "AM4",
            "form_factor": "ATX",
            "chipset": "X570",
            "max_ram_speed_mhz": 4400,
            "m2_slots": 2
        },
        "price_inr": 17000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHtTUrJvA6nHRHytRUvxcmXQkOIedS8FwJ7qq7g-9RzNa84hDgjoRiVhJbLLnEfhmeW7-WQ1DXm-9qpKGXbwYxBo4gMrayvkp1PTs_8udvZXMmfTC5w1-Z7Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_asrock_b550m_pro4",
        "category": "mobo",
        "name": "ASRock B550M Pro4",
        "brand": "ASRock",
        "specs": {
            "socket": "AM4",
            "form_factor": "mATX",
            "chipset": "B550",
            "max_ram_speed_mhz": 4733,
            "m2_slots": 2
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrt2lQ9QH9Vmf9G_pVxVYP1Voiebawn6ZYXak9dYmKl3VeEyUvr6KjAwFUBcO5SuC5z0-N0CcQGlgPVxXIMYWYhu0oSSHNQrraKNNx8tpB",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_asus_prime_h610m",
        "category": "mobo",
        "name": "ASUS Prime H610M-A",
        "brand": "ASUS",
        "specs": {
            "socket": "LGA1700",
            "form_factor": "mATX",
            "chipset": "H610",
            "max_ram_speed_mhz": 3200,
            "m2_slots": 1
        },
        "price_inr": 6500,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLhQESWRrE-59wlVaxfyuIrjQ4zsve5LPCNCultAOySsEIYUCzOQDayLy1cwccoasIKomdpRMrEcowBfHR3Z19fm85k8LRLJB52FcuyjOmmMWoobE9-YdD",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_msi_mag_b760_tomahawk",
        "category": "mobo",
        "name": "MSI MAG B760 TOMAHAWK",
        "brand": "MSI",
        "specs": {
            "socket": "LGA1700",
            "form_factor": "ATX",
            "chipset": "B760",
            "max_ram_speed_mhz": 6400,
            "m2_slots": 3
        },
        "price_inr": 19000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmXB3gKbAMG1UOAP3cWzyZqoM5ZGfDDcxvU59KYBxA26BfoIA-rncFTcx3eQ-vCGzYMicGokf8BrlOEX_A5mLckZufbBCqs2Uw5pLmQ0hhO9xBkPVVY-FvTw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_asrock_x670e_taichi",
        "category": "mobo",
        "name": "ASRock X670E Taichi",
        "brand": "ASRock",
        "specs": {
            "socket": "AM5",
            "form_factor": "ATX",
            "chipset": "X670E",
            "max_ram_speed_mhz": 6400,
            "m2_slots": 4
        },
        "price_inr": 42000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJFjSuosyxYkCqEZLbHEUOhSCA6AnVbQhRvhxgUTl-fkRnTvaDXRnW3MCv-vfBb1qDEkfgjFFKsongwTAbhLa_xTENkYk0hnxMVVGuLjJVSxF9__gNAfQ1iD8",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_gigabyte_b760m_aorus",
        "category": "mobo",
        "name": "Gigabyte B760M AORUS Elite",
        "brand": "Gigabyte",
        "specs": {
            "socket": "LGA1700",
            "form_factor": "mATX",
            "chipset": "B760",
            "max_ram_speed_mhz": 5200,
            "m2_slots": 2
        },
        "price_inr": 11000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTfc_CwWi-L3AhjmclQjTY7TIWCvnxM8MFZ4spH_xzESjrCAzL9oCoJUZOZxcypBHNe8Zqkr4ZYP8xjXOG_G7e40t31gn3qiwwp3K66xCffYsncjU7Gb7aNJMQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_msi_meg_z690_unify",
        "category": "mobo",
        "name": "MSI MEG Z690 UNIFY",
        "brand": "MSI",
        "specs": {
            "socket": "LGA1700",
            "form_factor": "ATX",
            "chipset": "Z690",
            "max_ram_speed_mhz": 6600,
            "m2_slots": 4
        },
        "price_inr": 38000,
        "image_url": "https://m.media-amazon.com/images/I/91pK+A0z6ML.jpg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_asus_rog_strix_x670e",
        "category": "mobo",
        "name": "ASUS ROG Strix X670E-F",
        "brand": "ASUS",
        "specs": {
            "socket": "AM5",
            "form_factor": "ATX",
            "chipset": "X670E",
            "max_ram_speed_mhz": 6400,
            "m2_slots": 4
        },
        "price_inr": 36000,
        "image_url": "http://noveltycomputech.com/cdn/shop/files/rog-strix-x670e-e-gaming-wifi-image-main-600x600_f95b5918-e22f-4bd8-a578-21c8427d608e.jpg?crop=center&height=1200&v=1728838160&width=1200",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_biotek_entry_am4",
        "category": "mobo",
        "name": "Biostar B450MH (Budget AM4)",
        "brand": "Biostar",
        "specs": {
            "socket": "AM4",
            "form_factor": "mATX",
            "chipset": "B450",
            "max_ram_speed_mhz": 3200,
            "m2_slots": 1
        },
        "price_inr": 5000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiYwLs-aCTYbmMjH46cM5nM1SauKzQz4prIJuCt0APgxppXaFIdoLvcO3H-F4rnbft9PeSyoD4PAVmwxVPQlEW8vgXc5pDojh4LYB9Vi2EzFrOU44AA6MF",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_asus_prime_x570_p",
        "category": "mobo",
        "name": "ASUS Prime X570-P",
        "brand": "ASUS",
        "specs": {
            "socket": "AM4",
            "form_factor": "ATX",
            "chipset": "X570",
            "max_ram_speed_mhz": 4400,
            "m2_slots": 2
        },
        "price_inr": 15000,
        "image_url": "https://sell.gameloot.in/wp-content/uploads/sites/4/2023/03/motherboard-cover.jpg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "mobo_gigabyte_b450m_gaming",
        "category": "mobo",
        "name": "Gigabyte B450M Gaming (budget mATX)",
        "brand": "Gigabyte",
        "specs": {
            "socket": "AM4",
            "form_factor": "mATX",
            "chipset": "B450",
            "max_ram_speed_mhz": 3466,
            "m2_slots": 1
        },
        "price_inr": 6000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROjXwBzStuiIEAy-1rsPHCvQ--V22LV-WCVUeGYKTS6JNls3rI7PCoIwRZmt8VIGQaqHaSARPxMnuuHPzjwndqCJeoRXESjDA13fj9Wxf7Oncu7em5HsZj",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_samsung_970_evo_plus_500gb",
        "category": "storage",
        "name": "Samsung 970 EVO Plus 500GB NVMe",
        "brand": "Samsung",
        "specs": {
            "capacity_gb": 500,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 3600,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqotJDcD0scYJ-N8P13cS096PlYNRFqbO9Ed5zw70Q6SAZooCA13bapFDsCRUBKI3l6EZyROHNvLHOPJfSh3rl5AnoDyLweyi8Mw-3A5PXhcADkK5v3Ln-",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_wd_black_sn770_1tb",
        "category": "storage",
        "name": "WD Black SN770 1TB NVMe",
        "brand": "Western Digital",
        "specs": {
            "capacity_gb": 1000,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 6800,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTUoy6u3YNUEofeHvtM-V3u8vxqBT6JIbwmjw338dmHGp9b3FmpU4pdBVabCchJHZ2dXyFfYjurJdbMrJDxjmZ6TOQ6-X7P8yy9WoOXqYc2ShV6egzdkQ8QzQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_crucial_p3_500gb",
        "category": "storage",
        "name": "Crucial P3 500GB NVMe",
        "brand": "Crucial",
        "specs": {
            "capacity_gb": 500,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 3400,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-XRko6jtuFu67ZaqMq7HxPg-xmi0kFMsofBYHgJxk9CAYgVRK8wvmT2ENq97U1sMStPgJw7l8NFwJbi0UlFSL0R7d__VUAwnsEtLGLzPR",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_sandisk_ultra_1tb",
        "category": "storage",
        "name": "SanDisk Ultra 1TB SATA SSD",
        "brand": "SanDisk",
        "specs": {
            "capacity_gb": 1000,
            "interface": "SATA",
            "form_factor": "2.5"
        },
        "price_inr": 4200,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr4PRrqG1uQTUjYnqjPf-lYCniuGZVLNiQU__iqzPJNwNJz909ZHO8HpEcwXBDA4KBJAUv6NwPAGe2UJggzkB9LGx0Lwsi-SfPPerHhJCXdE1uLep_VNUAxNQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_seagate_barracuda_2tb",
        "category": "storage",
        "name": "Seagate Barracuda 2TB HDD",
        "brand": "Seagate",
        "specs": {
            "capacity_gb": 2000,
            "interface": "SATA",
            "form_factor": "3.5"
        },
        "price_inr": 4200,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1tIZ9pccf1x_qeMVRLuuRg-dnl5l2GWtQW8y8UMVtY_hlpHDpZGIvQ3UknGzRGE_SGHPOz3HCcZBfauxNGOPAC24iHJ3FH0zV9f_vRb1CWgOo1NRMWMXp",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_samsung_980_pro_1tb",
        "category": "storage",
        "name": "Samsung 980 PRO 1TB NVMe",
        "brand": "Samsung",
        "specs": {
            "capacity_gb": 1000,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9uetWXR9KXtWi3mTWlnZO2oWldnuXPETOF2X70L3Fl-hQRzprmFnXUJjYgW0fFy4-UH-hBq-9QtDgT6E2fhAxzEgv6GPRplg9eSsC3uepKPOXpMjC_ZjY",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_kioxia_exceria_500gb",
        "category": "storage",
        "name": "Kioxia Exceria 500GB NVMe",
        "brand": "Kioxia",
        "specs": {
            "capacity_gb": 500,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 3500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDLubw4aLs6FUfr1ZJ7_ZL1L-nqn_TTvg8YC4QXMtHZS9i0YGqNHpEo3km92Fyp1tdnMzdqnrvOgd1uWigl5Bdm1Kpx80DhvKOa48br1da4m5LNj3-XJiL_Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_crucial_micron_2tb",
        "category": "storage",
        "name": "Crucial MX500 2TB SATA SSD",
        "brand": "Crucial",
        "specs": {
            "capacity_gb": 2000,
            "interface": "SATA",
            "form_factor": "2.5"
        },
        "price_inr": 12000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfmXSZ9Y2rd7DyZsM2CI-WtOrPNIU-iomTeSb_F7NX7URPwR4NwL_1gW0CaRaMPgPRs44rq9VK0pJ8au4ymdficewLeK6K1IzsJyVkVGz9_rGNo7LhyFmeLg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_western_digital_blue_500gb",
        "category": "storage",
        "name": "WD Blue 500GB SATA SSD",
        "brand": "Western Digital",
        "specs": {
            "capacity_gb": 500,
            "interface": "SATA",
            "form_factor": "2.5"
        },
        "price_inr": 3000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8pH2kGrZNcVfmUJIkOiNi0_zh9DQV3ohWu-473uUoI-lnG_zGHQ-dAiY-RVMu7bPvoMQ1lcxBRENH6BTSNgwFn3wemYzffqSXcP2nQTksxR5I9DYliFzO8w",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_kingston_a400_240gb",
        "category": "storage",
        "name": "Kingston A400 240GB SATA SSD",
        "brand": "Kingston",
        "specs": {
            "capacity_gb": 240,
            "interface": "SATA",
            "form_factor": "2.5"
        },
        "price_inr": 1200,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQealECRPmzR32oaRifsWe7OsVcPqIJ4bHxug6dlzfCM0LoDNtiNH3t2P_4lPfMl7nVDXoGVuthNqOEXPsGNFf17UFUZge2DrWMv1vz9utT2d7r8Oxn-DWbr6Y",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_seagate_firecuda_1tb_ssd",
        "category": "storage",
        "name": "Seagate FireCuda 530 1TB NVMe",
        "brand": "Seagate",
        "specs": {
            "capacity_gb": 1000,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 15000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlhTpYzgd5xBOP_m6UbacEVTZfZloSBMDO2yJZP4NcmKeelPWXHJzBr9tnmqEhF2jylcjBCRLBPK_dHerVh9KUFkOwn6XYPshN6389uIA",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_samsung_qvo_2tb",
        "category": "storage",
        "name": "Samsung QVO 2TB SATA SSD",
        "brand": "Samsung",
        "specs": {
            "capacity_gb": 2000,
            "interface": "SATA",
            "form_factor": "2.5"
        },
        "price_inr": 10000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_agySM9YKBaj7qb0KJwCJobof6LH_jspLsJXdzfcQrvhoWTTofAe_Dha4kKOLTv9S-b0_eD0hspK6oZFQX1D11GB7DgCopV-Db8n61612R3eqYpH5e6jNzw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_intel_670p_2tb",
        "category": "storage",
        "name": "Intel 670p 2TB NVMe",
        "brand": "Intel",
        "specs": {
            "capacity_gb": 2000,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 8500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnwSxwr8AbzrO_GkGih2d8FHNcnl33p4ScFEeulUDRDv53MO-JIXcuDDv1kp2MLDsh09bvokJOm6ek7JHmDvkFzQs4dNUXMdscKdgAOzZTb5JQ1iR87knA",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_toshiba_cn200_1tb",
        "category": "storage",
        "name": "Toshiba CN200 1TB NVMe",
        "brand": "Toshiba",
        "specs": {
            "capacity_gb": 1000,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 5200,
        "image_url": "https://m.media-amazon.com/images/I/41ynD6WmH7L.jpg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_sandisk_extreme_pro_1tb",
        "category": "storage",
        "name": "SanDisk Extreme Pro 1TB NVMe",
        "brand": "SanDisk",
        "specs": {
            "capacity_gb": 1000,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 9700,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAJFFBgCtdVzlNKMkbU9Mk7WPkfY1WE6qBda_05B1iqGnaAvXAhl5MsngbU0xKuGqtJxL_vJyCDX8YAwGodzm0ZFkh0KRF3xckCmEGwAWW2bTdFXb6-x0e",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "storage_crucial_p1_1tb",
        "category": "storage",
        "name": "Crucial P1 1TB NVMe",
        "brand": "Crucial",
        "specs": {
            "capacity_gb": 1000,
            "interface": "NVMe",
            "form_factor": "M.2"
        },
        "price_inr": 4200,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTW81GN7sXY0_C9LIsWrwxceVxvZHMPFEw7zO9LdKmnNZbSnUVjZQ2YbzE3vUicvsTqmlWLHnBuZo9OmGxjWQGzOTG20kujZnqziZZX0FzXFBzngxZYbT7ITg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_corsair_cv_550w",
        "category": "psu",
        "name": "Corsair CV550 550W",
        "brand": "Corsair",
        "specs": {
            "wattage": 550,
            "modular": false,
            "efficiency": "80+ Bronze"
        },
        "price_inr": 3200,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR56dw4WjFiYQIyYv1MtaSHlEwMwpv-lMHYsAbA4JGm0TJLyYEvJAItlbfcIC8uCtR-VZQCWJnr6smxvbR9yCOXkeMWnRV1osRIkv5BsXRLiT3vMuITMQ-1",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_corsair_rm650x",
        "category": "psu",
        "name": "Corsair RM650x 650W",
        "brand": "Corsair",
        "specs": {
            "wattage": 650,
            "modular": true,
            "efficiency": "80+ Gold"
        },
        "price_inr": 8200,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSd339Cm4QCnKoJISnrcCJ68bk185OEjXmaRFw2Mz4m16_Ab27Coqu1VuoHjlRwHl7muFM_5NomTrQ0t-nZXdzQ6UJ47Uye36pyNnDq0KMYTbisgSqlw0iX",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_cooler_master_550w",
        "category": "psu",
        "name": "Cooler Master MWE 550 550W",
        "brand": "Cooler Master",
        "specs": {
            "wattage": 550,
            "modular": false,
            "efficiency": "80+ Bronze"
        },
        "price_inr": 3000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFNMc99RwG3c0fbEd_R_D2p5mkW-Dwn_4h9yGHHDSQLzW8tM2CeaeT2HsZUZ3r93Ig-TI3d9AwwPfc-QX-zxCbb9OOyBpwTtU5Rbjqmzeg04BhLr5rhh3Z",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_antec_ne850g",
        "category": "psu",
        "name": "Antec NE850 Gold 850W",
        "brand": "Antec",
        "specs": {
            "wattage": 850,
            "modular": true,
            "efficiency": "80+ Gold"
        },
        "price_inr": 9500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgl-12KA95Or6YRQhW5dOAJSuGQXwaJzDypeoUslfVvmmx8D7gFMpzTX0fV4KdbPDb4iPuKf0hRRIDU5xSx-DZ_nCd8N9AqYvoO-rHDAhBXFcxpofC16qk",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_seasonic_focus_650w",
        "category": "psu",
        "name": "Seasonic Focus GX-650",
        "brand": "Seasonic",
        "specs": {
            "wattage": 650,
            "modular": true,
            "efficiency": "80+ Gold"
        },
        "price_inr": 9200,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdiT1s7N7EFXqwraBUKeNVo32atibj9eill_IgHSfOWTExrAq2dMxDRRaa_cQwcXFY9jFdLYUnPqHzZRu_j7a6vJ0tb94VQr4I4jI0WSiy",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_evga_600w_bronze",
        "category": "psu",
        "name": "EVGA 600W 80+ Bronze",
        "brand": "EVGA",
        "specs": {
            "wattage": 600,
            "modular": false,
            "efficiency": "80+ Bronze"
        },
        "price_inr": 3800,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCOtFpXxC03wTjZ1gxOKjMxDrqNBHmlkqDeO9SG8Lpfp_N5cx_XvFGscsRbXmA0KfFC86Gs-ts0rX5vb1actotHK2aC7EbAkEl4FoG68TM1hXZHM30qFnT",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_corsair_tx750m",
        "category": "psu",
        "name": "Corsair TX750M 750W (semi-modular)",
        "brand": "Corsair",
        "specs": {
            "wattage": 750,
            "modular": "semi",
            "efficiency": "80+ Gold"
        },
        "price_inr": 9500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR56dw4WjFiYQIyYv1MtaSHlEwMwpv-lMHYsAbA4JGm0TJLyYEvJAItlbfcIC8uCtR-VZQCWJnr6smxvbR9yCOXkeMWnRV1osRIkv5BsXRLiT3vMuITMQ-1",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_thermaltake_80_plus_650",
        "category": "psu",
        "name": "Thermaltake Smart 650W 80+",
        "brand": "Thermaltake",
        "specs": {
            "wattage": 650,
            "modular": false,
            "efficiency": "80+"
        },
        "price_inr": 3600,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZRmKLB0SsKRc6sn5ISFFJdBeDxOM0Yzrz_5amA8w41WPcu8qLGBr2ZYs6d6vN2HphvpaxKIkCd1dEHgUa6LY6WyXEueBGwFwWc9uNvIJm-k-nuhTdJMGVVA",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_antec_vp650p",
        "category": "psu",
        "name": "Antec VP650P 650W",
        "brand": "Antec",
        "specs": {
            "wattage": 650,
            "modular": false,
            "efficiency": "80+ Bronze"
        },
        "price_inr": 3300,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTz_JY5IiamtQHy8P6D5iPG-F1AqmIHfa1HJcJw-HrYyqxvgulcRkl6CFVf3ovQWuz0YBvLHf8t2u6TlaJrfxm58FUeYLXfEw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_corsair_hx1000",
        "category": "psu",
        "name": "Corsair HX1000 1000W",
        "brand": "Corsair",
        "specs": {
            "wattage": 1000,
            "modular": true,
            "efficiency": "80+ Platinum"
        },
        "price_inr": 27000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpqlzUE2SbrI3eYxGOmOESvKVPDZ31YMMIVhQczhpRBDNcoZCWF0EMTW9m9M6PmgFHBwMOAixPJuI2DFrTjPFGm7K_mr_MwQN3wQzxa6Qwx5T04HtisA6k9w",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_be_quiet_straight_power_11_750",
        "category": "psu",
        "name": "be quiet! Straight Power 11 750W",
        "brand": "be quiet!",
        "specs": {
            "wattage": 750,
            "modular": true,
            "efficiency": "80+ Gold"
        },
        "price_inr": 12500,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEE5QIlkEo3qQgS7KbMaNU1VdvIJjlTyLvMWAz--RE9PRcnYv8ihPOrWy-jUJDYciCPvdFAMYrxLofXBerXf1Zs5t0GkEtHeAHeKQwpp0",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_seasonic_s12iii_500",
        "category": "psu",
        "name": "Seasonic S12III 500W",
        "brand": "Seasonic",
        "specs": {
            "wattage": 500,
            "modular": false,
            "efficiency": "80+ Bronze"
        },
        "price_inr": 2800,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoJ7XaG5yfHnDnstYI_Kx1MpFd-cA5S5icA5mY9OJtZwv9Q-8ndu0zXusbcR6Xa4_uMjjoMCZ25jd-4q5wa88WtzV6gTGrIKMDPC7oWAJk",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_superflower_lea_650",
        "category": "psu",
        "name": "SuperFlower Leadex III 650W",
        "brand": "SuperFlower",
        "specs": {
            "wattage": 650,
            "modular": true,
            "efficiency": "80+ Gold"
        },
        "price_inr": 7800,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhmHitK9ispx4VyxcNu3yl5GyDRa1fdPUuCWA9CGCuDW7K2BmCxvPldk86I2nT38Aa83LUIuKpPMrL2ru1GeR0ukKu1K_2npL9vl0G6jYeZNpjZrs1oW3cZA",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_cooler_master_v650",
        "category": "psu",
        "name": "Cooler Master V650 SFX-L 650W",
        "brand": "Cooler Master",
        "specs": {
            "wattage": 650,
            "modular": true,
            "efficiency": "80+ Gold",
            "form_factor": "SFX-L"
        },
        "price_inr": 10000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8BWrcxUBC3u2ZUMUjnBBRQfy8UtuU7TaJdGN_d4l2ZelKwKz9Mf5Pi_hZhbmEdytVPFnKp0CAD7MIjv4YX7ma43UUkOx3B6mkirqdon90MgywCuBBz_N4GQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_xpg_core_850",
        "category": "psu",
        "name": "XPG Core Reactor 850W",
        "brand": "XPG",
        "specs": {
            "wattage": 850,
            "modular": false,
            "efficiency": "80+ Bronze"
        },
        "price_inr": 6000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRc7CQ9UHs8B_R9u9d2Rlcqbyypm0phkaTddNvvTFiHgVIVm0sGPX48P8jvXH-PGmFegbr65yhLtseo9mbkOoRxYK43GY5aITEmdTsrSnXMuVqxzOyZUXAL7A",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_antec_hcg_850",
        "category": "psu",
        "name": "Antec HCG 850W Gold",
        "brand": "Antec",
        "specs": {
            "wattage": 850,
            "modular": true,
            "efficiency": "80+ Gold"
        },
        "price_inr": 9800,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvrzkfC4Vsp5WKETHaX6EL8DArkKpa_v7Jz30d3K2J9A-Ok8CG3Uz6IN4XY3PtIleI4gxHz2u6nTeNi346UJ5ywpTsoSTiVtRHfqnlhQ6UjLFHdbaFuE7T",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "psu_evga_supernova_650",
        "category": "psu",
        "name": "EVGA SuperNOVA 650 G5",
        "brand": "EVGA",
        "specs": {
            "wattage": 650,
            "modular": true,
            "efficiency": "80+ Gold"
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTz37I9IlPr0UnSgHTG8pvbnEzdpJxuRmJUC7wuSQZXtfNXvwcocXZJAwg1rn_JjgLjyu1aGpKxBhsQG8ML5GERxIq11EiEAApr1r_sRXqH",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_nzxt_h510",
        "category": "case",
        "name": "NZXT H510",
        "brand": "NZXT",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 381,
            "cpu_cooler_max_height_mm": 165
        },
        "price_inr": 5500,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXwceXV-TsQy61g2PZauuoasT8XmuiN7ouCFisJVy_D_31AIG9hPt3lwOYxrFJTgE7E5S0donRJjHjMuv98ZfPF8fuxPWzeTc4q15a_e5Vs_Edl2X5CmSA",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_ant_esports_220_air",
        "category": "case",
        "name": "Ant Esports 220 Air",
        "brand": "Ant Esports",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 370,
            "cpu_cooler_max_height_mm": 165
        },
        "price_inr": 2600,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTChNqzv02ZYS6Twyqohj0Vxxkz2t9oAYzCOdH-97gcm5atl35l9_M2HA3mey5oK68ivdsIPvFFpjA1XnGwgDEChcN-6rEm6pnJ9rcyTV8DFuq85HopKui1",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_corsair_4000d",
        "category": "case",
        "name": "Corsair 4000D Airflow",
        "brand": "Corsair",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 360,
            "cpu_cooler_max_height_mm": 170
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoBcAteQ_UjoeTRdu4r14WhKfU29vywwyvf3g0pWAUyxE0L193Al_nOiKCjtvx2Bodbw903920yxKayP95zAzvqFuNnAfSFhtCZ1hkQYWpyyFwShDwwwj_-Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_cooler_master_mb520",
        "category": "case",
        "name": "Cooler Master MasterBox MB520",
        "brand": "Cooler Master",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 410,
            "cpu_cooler_max_height_mm": 165
        },
        "price_inr": 7500,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYmc9I57W4Owkd4SvGszrsR0Bt5evjceqVj4koDQzfQbkz5HeQayTkJaFQpPFe1xZbHkEpGB2Iq9uZtOKKGQnq8_YaDIPcFjApI7r3f8gtuesOVVMfZOyN",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_lian_li_pc_011",
        "category": "case",
        "name": "Lian Li PC-O11 Dynamic",
        "brand": "Lian Li",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 420,
            "cpu_cooler_max_height_mm": 155
        },
        "price_inr": 12000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQceHibDUum6VYyDfiv9NtQ4e8PYmPYETXOVTsc_G1yfCjhOrtq5I1XIA6ckaDfLwuM6Cd9UKGb9batrx6zT7KJxf8W_OTGlS3m1x-fnzOAd_dCzfJn5jQ5Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_phanteks_eclipse_p400a",
        "category": "case",
        "name": "Phanteks Eclipse P400A",
        "brand": "Phanteks",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 420,
            "cpu_cooler_max_height_mm": 170
        },
        "price_inr": 7000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLw0hvap_WFptAxpajUN3P0widGjojOKzt_xc95Pdrd3vk2QxWkhNpIQ9DJr820WjQdluq3yLRkNIiLbdkvMgS8PT9Xac-nfgT_cFkrfjjA-EbmMpXYLUc",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_coolermaster_mastercase_h500",
        "category": "case",
        "name": "Cooler Master H500",
        "brand": "Cooler Master",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 410,
            "cpu_cooler_max_height_mm": 165
        },
        "price_inr": 9500,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrwZ1WVDkFZC7uGsV-n0t5LgAbM8ZdiZhWRUmyGqZujeRd7GzUcXtc-O6I0AH0lTNAlcjpKmNtJYWxhNSyd7KuDqElf8ugyXSb46JeI2sehqCiuX7V6n9B",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_thermaltake_v200",
        "category": "case",
        "name": "Thermaltake V200 TG",
        "brand": "Thermaltake",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 370,
            "cpu_cooler_max_height_mm": 160
        },
        "price_inr": 3200,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRf9hiAJRFlgxkRtUa5jGsw05gh6ZxwrSzho-_iCqObv1URysxbaDSapO9CQFb_65528G57vYYVPfC-k-o6gMCLbfhaKGefygdcTG9sFqzdxSus5QtfUXXEUg",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_corsair_c600m",
        "category": "case",
        "name": "Corsair 6000X (Full tower)",
        "brand": "Corsair",
        "specs": {
            "form_factor": "E-ATX/ATX",
            "max_gpu_length_mm": 420,
            "cpu_cooler_max_height_mm": 185
        },
        "price_inr": 28000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfQt4Z5i5V7AZExhxiAuWasBKj0Pta-R6NyzaLir5Ovq2UwZ5vXMI6mDMVC6qL9w3OY2DWMkSc7YC45HjlnvUbQt5e1H87bBhN8qnVlZv23LFX745lF6GkwQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_deepecool_cf_120",
        "category": "case",
        "name": "DeepCool CF120 Glass",
        "brand": "DeepCool",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 360,
            "cpu_cooler_max_height_mm": 165
        },
        "price_inr": 4200,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQumwU8xy9ACXuTkekFTvMwmm36K4dMXuDWilxbGXT34_pHC03FbQW0whKbg8JVjqUmnwzgML0aGH0akAxQrnFng88z3v2Oi1mlFgpvGClmEJYq5cCxZ-6y",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_zalman_s3",
        "category": "case",
        "name": "Zalman S3",
        "brand": "Zalman",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 340,
            "cpu_cooler_max_height_mm": 160
        },
        "price_inr": 2200,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7a32ep3t4A2POoY_4vDRoUmiaTt64AARzpvcvCDaPpGDL4i3o6X0Z34-MMTW1KurhBA7OlRgioiRskR6L444emtzVe7g46Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_coolermaster_nr200",
        "category": "case",
        "name": "Cooler Master NR200 (Mini-ITX)",
        "brand": "Cooler Master",
        "specs": {
            "form_factor": "Mini-ITX",
            "max_gpu_length_mm": 330,
            "cpu_cooler_max_height_mm": 155
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFFdRToHB2WAw5yz6jTtS06FR64ae0WD8SDlIO5lG8b_W9448dnHCYa5rlxc1MlxU_jsdEopJ-vGB8R2AtLZyEsGs8AfqVjGRXCesOtqvV-dn0efXHcJsZ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_phanteks_enthoo_pro",
        "category": "case",
        "name": "Phanteks Enthoo Pro",
        "brand": "Phanteks",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 420,
            "cpu_cooler_max_height_mm": 190
        },
        "price_inr": 9000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOk6grc4VWkVm9xE_M-gkZFlnFnX8TuuH3gLiJDW6Vg-r1-0xP45FiZVgJEkDL4rY8ZUPe5r9PAu7PIIMs1aQV7Mb1bpM20XpI6WXoYElvC8UVficuV17f",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_antec_df600",
        "category": "case",
        "name": "Antec DF600 Flux",
        "brand": "Antec",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 360,
            "cpu_cooler_max_height_mm": 165
        },
        "price_inr": 6000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3JXucxNU8j8B6djyhXUCHphiboGlGpx1VNvFfMQat4DvUwpfRS-kDkcqEQ3sFijAiSd-JJQERwMALwAyWdr1GatfLpSyozavt2twpB0fisdrnoGDRZtoH",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "case_tecware_f390",
        "category": "case",
        "name": "Tecware F390 TG",
        "brand": "Tecware",
        "specs": {
            "form_factor": "ATX",
            "max_gpu_length_mm": 370,
            "cpu_cooler_max_height_mm": 165
        },
        "price_inr": 4500,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMY95-EYAJ2ghLnem05N_v8ynsfkq0z3U-bLRv8zdQ4J24lSFbXn1det_7qnSRutr3mwOWcgJGXeW1mtv5hWUpeSt0-VqSqCrKc_a_Wzk8XZCeQ7m4WNW0qw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_cooler_master_hyper_212",
        "category": "cooler",
        "name": "Cooler Master Hyper 212 Black",
        "brand": "Cooler Master",
        "specs": {
            "cooler_height_mm": 159,
            "type": "air",
            "tdp_cooling_w": 150
        },
        "price_inr": 2500,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTaaDl5bW-798e3uALV5uYiEKmJHQ2yK_SqqLVO38OTCJ-F6-J6zmGRrMvNX8L1b3GJGC05NdhTr9wHrZ2dijZEI4R9YUEDSABn1m8utCmEmvVyPTiRdQy1",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_noctua_nh_d15",
        "category": "cooler",
        "name": "Noctua NH-D15",
        "brand": "Noctua",
        "specs": {
            "cooler_height_mm": 165,
            "type": "air",
            "tdp_cooling_w": 220
        },
        "price_inr": 9500,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3Y8yKcrqkJBJGtIN4yWnYLxflgVPDhhOv-5fPRstoNswsk2n-vtwVGaaGKw974OSshgtndFvdwTsg2EHC5bV_O22rFREvIVvhK_dhOmgtNGv9A8gWxNxs0A",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_deepcool_ak400",
        "category": "cooler",
        "name": "DeepCool AK400",
        "brand": "DeepCool",
        "specs": {
            "cooler_height_mm": 160,
            "type": "air",
            "tdp_cooling_w": 150
        },
        "price_inr": 2800,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYpMwmjQSwq8QofA52HQNCbuP7CBF39yxT7KrVBSyOj8EjJ3KzauLsHhZyDgYxZoi5gk6L4dIzA0tRun9Go-3LVuNNNuOMc13NJ1KfiQ7Pb9nutmRLl5E",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_corsair_h100i",
        "category": "cooler",
        "name": "Corsair iCUE H100i RGB (240mm AIO)",
        "brand": "Corsair",
        "specs": {
            "type": "aio",
            "radiator_mm": 240,
            "tdp_cooling_w": 300
        },
        "price_inr": 11000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuh4MU6h6exiF7UicEhLNLf1PvG1ocSSlH6pYDD2kv8ENk5Esw8YW78zGV8kie8ifmQ9-Ej5cxssc6x3033aSFCsyO1ZnEu81GGxr-RpWi8EYfvLc2-3qY",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_corsair_h150i",
        "category": "cooler",
        "name": "Corsair iCUE H150i (360mm AIO)",
        "brand": "Corsair",
        "specs": {
            "type": "aio",
            "radiator_mm": 360,
            "tdp_cooling_w": 350
        },
        "price_inr": 16000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVRlSSd6NAhYiOzEO8AzncLleiFzAi9EDs9Z_sg-l73BEq-6RxzmYCT1RsMHaMlwTfyR7HM9cUYcqsFRarnU6h97r73FSYYShnpVaM8zlWQf3WxgXxqOCFfw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_arctic_freezer_34",
        "category": "cooler",
        "name": "Arctic Freezer 34 eSports",
        "brand": "Arctic",
        "specs": {
            "cooler_height_mm": 157,
            "type": "air",
            "tdp_cooling_w": 180
        },
        "price_inr": 4000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyRXo5QDcXtX6CulxXCp7YV3l8bP-gM1XbkbhRTqdOqe45bC11A64myJr8GNMKjaxfQOaLrVj_wmDkLXAoNYgg_1F_pL7JXIREV4e7cl4wI54RW7PIrzQ-0Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_deepcool_ls520",
        "category": "cooler",
        "name": "DeepCool LS520 (240mm AIO)",
        "brand": "DeepCool",
        "specs": {
            "type": "aio",
            "radiator_mm": 240,
            "tdp_cooling_w": 280
        },
        "price_inr": 7600,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnO_cEQrvS0tcnY7QUomGLE4POBX1XbOzWCvK6IleEKwE33_cJOparJjEhbBZNHj2T1JnMCd_XjhbVZR7Z2NKfFGZ2tVv0pqQxwAfyB1KvWnEyq-QJ9ioT",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_noctua_nh_l12s",
        "category": "cooler",
        "name": "Noctua NH-L12S (low-profile)",
        "brand": "Noctua",
        "specs": {
            "cooler_height_mm": 70,
            "type": "air",
            "tdp_cooling_w": 120
        },
        "price_inr": 7000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6DzG7U4dWr6rrKndL_CnaUz-aYIzTk-THQYXQXIUyh6cR5fmH33wn8OUhdl6sk52QuWMRIR-BOSN3BJckJTXCTSjT8wEA2hbCJ6YjGDbHb3y503y9jrH2",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_be_quiet_dark_rock_4",
        "category": "cooler",
        "name": "be quiet! Dark Rock 4",
        "brand": "be quiet!",
        "specs": {
            "cooler_height_mm": 162,
            "type": "air",
            "tdp_cooling_w": 220
        },
        "price_inr": 8000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3bbjeLQMypZizH85LX0KWAss4r3lJ8D0h31Ul8JU1cLoT9xK83mc7caq4bT15EO7gusC9kQDjKhd6Uhn6E7axrSQcGCZH9Sd4s94pxhGiVIzQwTQqFHGl",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_thermaltake_toughliquid_240",
        "category": "cooler",
        "name": "Thermaltake Toughliquid 240mm AIO",
        "brand": "Thermaltake",
        "specs": {
            "type": "aio",
            "radiator_mm": 240,
            "tdp_cooling_w": 250
        },
        "price_inr": 6200,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDg8ievs-c7oaUICleVjYUBni16fjxqJb0Vww_wQH16RrZSD7aChatqBpHyR3cowGsscLUbYcmohO0cZBgeea3mhINnLmDLy0ZExa9wv6P487LiwDGozAOY-w",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_arctic_p12_p14",
        "category": "cooler",
        "name": "Arctic P12 / P14 Case Fans (pack)",
        "brand": "Arctic",
        "specs": {
            "type": "fan",
            "size_mm": [
                120,
                140
            ],
            "rpm": 2000
        },
        "price_inr": 1200,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRasYAa1TsLn5pB76DeYf4gLxamec19LahaaG__qUGs45OV8pS23KvB5jsTM6WRLW2zw4rO1E6aTofDLjmFiU8WGi0Z3k5uoP1EO4T4FJgi5zpQ8Vbeo9fxZA",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_corsair_ll120",
        "category": "cooler",
        "name": "Corsair LL120 RGB (single fan)",
        "brand": "Corsair",
        "specs": {
            "type": "fan",
            "size_mm": 120,
            "rpm": 1500
        },
        "price_inr": 1800,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXyvLQguNQs5vQ0_atGao-DpG90jLoJu2QFfLt3NCS_4WfU8oLZtZrq5p2V4_NVQ7opSbVRJ3rP4cJsiFtQs1a80Z3yzsrmB7iBQa5w3oG",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_deepcool_as500",
        "category": "cooler",
        "name": "DeepCool AS500 (air tower)",
        "brand": "DeepCool",
        "specs": {
            "cooler_height_mm": 165,
            "type": "air",
            "tdp_cooling_w": 200
        },
        "price_inr": 4500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRw5B0i8btbxAlPfVLDZEaIISJysKUuIOVqO1z85n5n4Re0Y4PJipcT0fkJrVVuzgNS18K-9vrfKin-iXylkCTtbyfSGw3XskgNGj-PNer2H3BiHuxXAlXR",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_cooler_master_masterliquid_ml240l",
        "category": "cooler",
        "name": "Cooler Master MasterLiquid ML240L",
        "brand": "Cooler Master",
        "specs": {
            "type": "aio",
            "radiator_mm": 240,
            "tdp_cooling_w": 250
        },
        "price_inr": 6000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzle3jeKC60ZJH5w4k4HQhK32riJSHOb4hQRQK0ltf5ll2NKmNXW_LN25cPnRD69FSJJ9Ly56JZZcnzYbiqjc9CV4qgkbwD7yXTIWmybfn",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_deeplcool_rf120",
        "category": "cooler",
        "name": "DeepCool RF120 (120mm RGB Fan)",
        "brand": "DeepCool",
        "specs": {
            "type": "fan",
            "size_mm": 120,
            "rpm": 1800
        },
        "price_inr": 800,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlukp5UrMx-r6gWhJ_3f4dLbx61Jy3RZiWX6p-_QpW35zHdJ9FK25HHYkGA-8EBZ-MkyHxKFmr4OzYfbsiiomaYRR4QNXBIIrmW5MSMU5eTxI2nqswUMrv-w",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "cooler_arctic_freezer_2x",
        "category": "cooler",
        "name": "Arctic Freezer 2X Dual Fan",
        "brand": "Arctic",
        "specs": {
            "cooler_height_mm": 160,
            "type": "air",
            "tdp_cooling_w": 200
        },
        "price_inr": 5000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMvFAfb-9Utg6m9n0SsIfMNDEp35uR5pwlkWc2YYmkidRWvNPsHJy16IffkxFZCWsuZlhRIH71vKUjTdWrMmTUFT9BTcRQKyALtEsS3uRlhXO399WP9ojw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_monitor_24_1080p",
        "category": "peripheral",
        "name": "Acer 24-inch 1080p 75Hz Monitor",
        "brand": "Acer",
        "specs": {
            "type": "monitor",
            "size_inch": 24,
            "resolution": "1920x1080",
            "refresh_hz": 75
        },
        "price_inr": 7500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbC7vQd4g7bgoG0uyGdouAHy1f1legjLet4W3AeKd44p49sqeplVnlLke0TP8K79DhnzEz-ukG9k4rt819FQVHIYgpI4xud_iQ5wtjxQ8OL9AffALxIh4d",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_logitech_g102_mouse",
        "category": "peripheral",
        "name": "Logitech G102 LIGHTSYNC RGB",
        "brand": "Logitech",
        "specs": {
            "type": "mouse",
            "dpi": 8000,
            "buttons": 6
        },
        "price_inr": 1400,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTN10PgOkdQgc8181j0gSagdwRAr1PJgZoXe60vHRy_GOtuU7rn-h9DS35AcMh8oNxbtH4EV6HhWZlwNqOTp48v_NQeaHgipowiBqDEkH8pA9EiMbJHAEulAw",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_redragon_k552_keyboard",
        "category": "peripheral",
        "name": "Redragon K552 Mechanical Keyboard",
        "brand": "Redragon",
        "specs": {
            "type": "keyboard",
            "switch": "Outemu Red",
            "layout": "ANSI"
        },
        "price_inr": 2500,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAgv9RTODljsN-RPXKgOZqHWV5hGVtApEJAuZDMHazSYbSVOaFTplNXyOgf9Rd_ccVdHTbqdLD16cNgRgeVKYYBA6dLvjb8lQ4LqlFuZm5kGr7DsJLHaED",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_logitech_mx_keys",
        "category": "peripheral",
        "name": "Logitech MX Keys (wireless keyboard)",
        "brand": "Logitech",
        "specs": {
            "type": "keyboard",
            "wireless": true
        },
        "price_inr": 12000,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRAZVhKvxI7pNWyXaxQoxeht--z0H3wDUKex2G5m8_g_AtvUpVznWzEmgG2Q6KmQxh7NcJHpJGwBX4NcSZuVxcuWPf9BJ05WdIWphVEX_XigSz-Fnzijs71",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_logitech_g_pro_mouse",
        "category": "peripheral",
        "name": "Logitech G Pro Wireless",
        "brand": "Logitech",
        "specs": {
            "type": "mouse",
            "dpi": 16000,
            "wireless": true
        },
        "price_inr": 9500,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTsAoQ2MmKFB23PzkXrQkeIylwnFh8iAD7j9qKwLYFKx1unE0XnhpFsNBrfvC-LJWQOP_e9fPzf633ruFZ4s5xbhEUT67kKf35aTz4s70x4Uf9-gNmvedlT9Q",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_hp_24mh_monitor",
        "category": "peripheral",
        "name": "HP 24mh 1080p IPS Monitor",
        "brand": "HP",
        "specs": {
            "type": "monitor",
            "size_inch": 23.8,
            "resolution": "1920x1080"
        },
        "price_inr": 9500,
        "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbyoN4H8uUQs1cEycoubxhk47KyVav0SZRM0D9FXAf1HIYmDEZWp8BJNaxy3VUfOzxSHovhbWd2k2pRRTXKrZCWn1fK_aoaACxFZIwSW6p",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_logitech_c922_webcam",
        "category": "peripheral",
        "name": "Logitech C922 Pro Stream Webcam",
        "brand": "Logitech",
        "specs": {
            "type": "webcam",
            "resolution": "1080p"
        },
        "price_inr": 8500,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSi6Hirp27FqIyz1RyI-SpRISgKg-4P5DJKOt4i3ZjwATND2-VwBuuOrvCGdz8eELSUmSB1WntuPStxpSsSkpNnNtzxe3kMq6fJCGUOqZdyup9cBi2w5LDQCQ",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_hyperx_cloud_ii",
        "category": "peripheral",
        "name": "HyperX Cloud II Gaming Headset",
        "brand": "HyperX",
        "specs": {
            "type": "headset",
            "connection": "3.5mm/USB"
        },
        "price_inr": 7000,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRfnY9rvJYge0cMI0oPMoaPfQMPAnVlfXOdhuVDt5Yj3txl6lbYQI-qon6isBbUgytBIoaPnpZDh4eQTAlIfGXPLnHmZUsTKILscYVjRHh_ea7ga-CFnqgz",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_logitech_mk270_combo",
        "category": "peripheral",
        "name": "Logitech MK270 Wireless Keyboard+Mouse Combo",
        "brand": "Logitech",
        "specs": {
            "type": "combo",
            "wireless": true
        },
        "price_inr": 2500,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnd7-SVOnsEAAfWNIJ3LCEhEqug9l29uNop-so07O8yKqZ7Q4sZgiRT2hYWjykJxZN8GpznPL3kCWS7nUoFfVCGb5YsUjqeWwEmpw_vP444KtVTy3bvP4g",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_acer_monitor_27_144hz",
        "category": "peripheral",
        "name": "Acer Nitro 27-inch 144Hz 1080p Monitor",
        "brand": "Acer",
        "specs": {
            "type": "monitor",
            "size_inch": 27,
            "resolution": "1920x1080",
            "refresh_hz": 144
        },
        "price_inr": 17000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOhkdc6loKU45rNbO8jFrfwmLpFhPGz_Ik2If13agKjc2bRKbPW6IV_GgcAvx9orr3Ocxa5JqJZQ6dILL25DA5KwJ8Ocg7Sovf7C2F3sT56FR8VYT3rGGk",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_steelseries_apex_5",
        "category": "peripheral",
        "name": "SteelSeries Apex 5 Hybrid Mechanical Keyboard",
        "brand": "SteelSeries",
        "specs": {
            "type": "keyboard",
            "switch": "hybrid"
        },
        "price_inr": 8500,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRj2WuJuU0I2kkM9Q-MSvCjgQ5PowFBJiL0CR3aBMrt_pfmCRJ4hid17eaMIH5mMOCrWDrk08G1LwwytQiGyWA2tS4cECcVsn4_sgA5tIAW-nG3IsCMs8Mp",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_razor_deathadder_v2",
        "category": "peripheral",
        "name": "Razer DeathAdder V2",
        "brand": "Razer",
        "specs": {
            "type": "mouse",
            "dpi": 20000,
            "buttons": 8
        },
        "price_inr": 6000,
        "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQqJ8-IJonpSPRAMH9jN8f1YbvwVD-e9FCudgh9SPgq9cW7Kly5KHMS1Si6URkCQoatUuRU3opN1deos3M3zPDEEly5FIX3j86G5TOPTQfjbCA_nDgnFFEB",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_logitech_g435",
        "category": "peripheral",
        "name": "Logitech G435 LIGHTSPEED Wireless Headset",
        "brand": "Logitech",
        "specs": {
            "type": "headset",
            "wireless": true
        },
        "price_inr": 7000,
        "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQdpX9GzWt_2yvi3w4-UGFEefanJmt9IhisN4hAVJHwnFaSXDp1FJM2yW25dAKq9x052WrUf254R3D4Z2wWYGMZ-QZTeglox9pNIO5V-T3zFLiRC0TaZjxH",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    },
    {
        "_id": "peripheral_steelseries_rival_3",
        "category": "peripheral",
        "name": "SteelSeries Rival 3",
        "brand": "SteelSeries",
        "specs": {
            "type": "mouse",
            "dpi": 8500
        },
        "price_inr": 2500,
        "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTDXf3RCq2vah_zfUOth9S64LC2nWFBb920_mXsBXOuwEW07bVY5q7_FBujBrG4VgYB9pU0FWrE5MMbyZZUmXmihgzn2jqvfmVESRMMdPNVB0_PsSRcnIS",
        "product_link": "",
        "vendor_sources": [],
        "created_at": "2025-12-12T00:00:00Z"
    }
]


// Helper to map raw data to application type
const mapRawToComponent = (item: any): PCComponent => {
    let type: ComponentType = 'CPU';
    switch (item.category) {
        case 'cpu': type = 'CPU'; break;
        case 'gpu': type = 'GPU'; break;
        case 'mobo': type = 'Motherboard'; break;
        case 'ram': type = 'RAM'; break;
        case 'storage': type = 'Storage'; break;
        case 'psu': type = 'PSU'; break;
        case 'case': type = 'Case'; break;
        case 'cooler': type = 'Cooler'; break;
        case 'peripheral':
            if (item.specs?.type === 'monitor' || item.name.toLowerCase().includes('monitor')) type = 'Monitor';
            else if (item.specs?.type === 'keyboard' || item.name.toLowerCase().includes('keyboard')) type = 'Keyboard';
            else if (item.specs?.type === 'mouse' || item.name.toLowerCase().includes('mouse')) type = 'Mouse';
            break;
    }

    return {
        id: item._id,
        name: item.name,
        brand: item.brand,
        type: type,
        price: item.price_inr,
        image: item.image_url,
        buyLink: item.product_link || '#',
        specs: {
            socket: item.specs?.socket,
            wattage: item.specs?.tdp_w || item.specs?.wattage,
            memoryType: item.specs?.type?.startsWith('DDR') ? item.specs.type : undefined,
            capacity: item.specs?.capacity_gb ? `${item.specs.capacity_gb}GB` : undefined,
            speed: item.specs?.speed_mhz ? `${item.specs.speed_mhz}MHz` : item.specs?.interface,
            formFactor: item.specs?.form_factor,
            chipset: item.specs?.chipset
        }
    };
};

export const COMPONENTS_DB: PCComponent[] = RAW_JSON.map(mapRawToComponent);
